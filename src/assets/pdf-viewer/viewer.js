/* PDF.js runs in its own document so Angular 14 need not compile modern modules. */
(async function () {
  const params = new URLSearchParams(location.search);
  const locale = params.get('locale') === 'fr' ? 'fr' : 'en';
  const labels = locale === 'fr' ? {
    title: 'Mon CV', loading: 'Chargement du CV…', error: 'Impossible d’afficher le CV. Réessayez ou téléchargez le PDF.',
    zoomIn: 'Agrandir', zoomOut: 'Réduire', fitWidth: 'Pleine largeur', openPdf: 'Télécharger le PDF', retry: 'Réessayer'
  } : {
    title: 'My resume', loading: 'Loading resume…', error: 'Unable to display the resume. Retry or download the PDF.',
    zoomIn: 'Zoom in', zoomOut: 'Zoom out', fitWidth: 'Fit width', openPdf: 'Download PDF', retry: 'Retry'
  };
  const byId = id => document.getElementById(id);
  const container = byId('viewerContainer');
  const panel = byId('statusPanel');
  const status = byId('status');
  const openPdf = byId('openPdf');
  const retry = byId('retry');
  document.documentElement.lang = locale;
  document.title = labels.title;
  container.setAttribute('aria-label', labels.title);
  status.textContent = labels.loading;
  openPdf.textContent = labels.openPdf;
  retry.textContent = labels.retry;
  retry.addEventListener('click', () => location.reload());
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') window.parent.postMessage({ type: 'cv-viewer-close' }, location.origin);
  });

  let task;
  let timeout;
  const abortController = new AbortController();
  function fail() {
    clearTimeout(timeout);
    status.textContent = labels.error;
    panel.hidden = false;
    retry.hidden = false;
    openPdf.hidden = false;
    container.setAttribute('aria-busy', 'false');
  }
  try {
    const pdfUrl = new URL(params.get('file') || '', location.href);
    const allowedFiles = ['CV_Français.pdf', 'CV_English.pdf'].map(name => new URL('../CV/' + name, location.href).href);
    if (!allowedFiles.includes(pdfUrl.href)) throw new Error('Unknown CV');
    openPdf.href = pdfUrl.href;
    openPdf.download = decodeURIComponent(pdfUrl.pathname.split('/').pop());
    timeout = setTimeout(fail, 30000);
    const pdfjs = await import('../pdfjs/legacy/build/pdf.min.mjs');
    const { PDFViewer, PDFLinkService, EventBus, GenericL10n, LinkTarget } = await import('../pdfjs/legacy/web/pdf_viewer.mjs');
    pdfjs.GlobalWorkerOptions.workerSrc = new URL('../pdfjs/legacy/build/pdf.worker.min.mjs', location.href).href;
    const eventBus = new EventBus();
    const linkService = new PDFLinkService({ eventBus, externalLinkTarget: LinkTarget.BLANK, externalLinkRel: 'noopener noreferrer' });
    const viewer = new PDFViewer({
      container, viewer: byId('viewer'), eventBus, linkService,
      l10n: new GenericL10n(locale),
      annotationEditorMode: pdfjs.AnnotationEditorType.DISABLE,
      // Bound memory on Retina iPads while allowing text selection and links.
      maxCanvasPixels: 5242880, maxCanvasDim: 4096,
      abortSignal: abortController.signal
    });
    linkService.setViewer(viewer);
    let ready = false;
    let fitting = true;
    const syncControls = () => {
      window.parent.postMessage({
        type: 'cv-viewer-state', ready,
        percent: Math.round(viewer.currentScale * 100), fit: fitting
      }, location.origin);
    };
    eventBus.on('pagesinit', () => {
      ready = true;
      viewer.currentScaleValue = 'page-width';
      syncControls();
    });
    eventBus.on('pagerendered', ({ error }) => {
      if (error) return fail();
      clearTimeout(timeout);
      panel.hidden = true;
      container.setAttribute('aria-busy', 'false');
      window.parent.postMessage({ type: 'cv-viewer-rendered' }, location.origin);
    });
    eventBus.on('scalechanging', syncControls);
    const zoom = factor => {
      fitting = false;
      viewer.currentScale = Math.min(4, Math.max(0.25, viewer.currentScale * factor));
      syncControls();
    };
    const resetFit = () => {
      fitting = true;
      viewer.currentScaleValue = 'page-width';
      container.scrollLeft = 0;
      syncControls();
    };
    const read = () => {
      fitting = false;
      viewer.currentScale = 1.5;
      requestAnimationFrame(() => {
        const page = byId('viewer').querySelector('.page');
        if (page) container.scrollLeft = page.offsetLeft + page.clientWidth * 0.34;
        syncControls();
      });
    };
    window.addEventListener('message', event => {
      if (event.origin !== location.origin || event.source !== window.parent ||
          event.data?.type !== 'cv-viewer-zoom' || !ready) return;
      if (event.data.action === 'in') zoom(1.25);
      if (event.data.action === 'out') zoom(0.8);
      if (event.data.action === 'read') read();
      if (event.data.action === 'fit') resetFit();
    });
    let resizeFrame = 0;
    let lastWidth = container.clientWidth;
    const resizeObserver = new ResizeObserver(() => {
      // Render outside observer delivery to avoid WebKit resize feedback loops.
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => {
        const width = container.clientWidth;
        if (ready && fitting && width !== lastWidth) viewer.currentScaleValue = 'page-width';
        lastWidth = width;
        viewer.update();
      });
    });
    resizeObserver.observe(container);
    window.addEventListener('pagehide', () => {
      clearTimeout(timeout);
      cancelAnimationFrame(resizeFrame);
      resizeObserver.disconnect();
      abortController.abort();
      task?.destroy();
    }, { once: true });
    task = pdfjs.getDocument({
      url: pdfUrl.href,
      cMapUrl: new URL('../pdfjs/cmaps/', location.href).href, cMapPacked: true,
      standardFontDataUrl: new URL('../pdfjs/standard_fonts/', location.href).href,
      wasmUrl: new URL('../pdfjs/wasm/', location.href).href,
      iccUrl: new URL('../pdfjs/iccs/', location.href).href,
      isEvalSupported: false
    });
    const pdf = await task.promise;
    viewer.setDocument(pdf);
    linkService.setDocument(pdf);
  } catch (error) {
    fail();
  }
})();
