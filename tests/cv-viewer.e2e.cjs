// Run after npm run build; install browsers with npx playwright install chromium webkit.
const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const { createServer } = require('node:http');
const { readFile, mkdir } = require('node:fs/promises');
const path = require('node:path');
const { chromium, webkit } = require('playwright');

let server, origin;
const root = path.resolve('dist/portefolio-app');
before(async () => {
  await mkdir('tmp/cv-viewer-qa', { recursive: true });
  server = createServer(async (req, res) => {
    try {
      let name = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      name = name.replace(/^\/portfolio\//, '/');
      const file = path.resolve(root, '.' + (name === '/' ? '/index.html' : name));
      if (!file.startsWith(root + path.sep)) throw new Error('Invalid path');
      const mime = { '.html': 'text/html', '.js': 'application/javascript', '.mjs': 'application/javascript', '.css': 'text/css', '.pdf': 'application/pdf', '.json': 'application/json', '.wasm': 'application/wasm', '.ftl': 'text/plain' };
      res.setHeader('Content-Type', mime[path.extname(file)] || 'application/octet-stream');
      res.end(await readFile(file));
    } catch { res.writeHead(404).end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  origin = `http://127.0.0.1:${server.address().port}`;
});
after(() => new Promise(resolve => server.close(resolve)));

async function rendered(frame) {
  await frame.locator('#viewerContainer[aria-busy="false"]').waitFor();
  assert.equal(await frame.locator('#statusPanel').isVisible(), false);
  await frame.locator('.textLayer').waitFor();
  assert.ok((await frame.locator('.textLayer').innerText()).includes('MEZRIOUI'));
  assert.ok(await frame.locator('.annotationLayer a[href]').count() > 0);
}
async function assertFit(frame) {
  await frame.locator('#viewerContainer').evaluate(el => new Promise((resolve, reject) => {
    const deadline = setTimeout(() => reject(new Error('PDF did not return to fitted width')), 3000);
    const check = () => {
      const page = el.querySelector('.page');
      if (page && page.getBoundingClientRect().width <= el.clientWidth + 1 && el.scrollWidth <= el.clientWidth + 1) {
        clearTimeout(deadline); resolve();
      } else requestAnimationFrame(check);
    };
    check();
  }));
  const size = await frame.locator('#viewerContainer').evaluate(el => ({
    width: el.clientWidth, scrollWidth: el.scrollWidth,
    pageWidth: el.querySelector('.page').getBoundingClientRect().width,
    pageHeight: el.querySelector('.page').getBoundingClientRect().height
  }));
  assert.ok(size.pageWidth <= size.width + 1, JSON.stringify(size));
  assert.ok(size.pageWidth >= size.width - 55, JSON.stringify(size));
  assert.ok(size.scrollWidth <= size.width + 1, JSON.stringify(size));
  assert.ok(Math.abs(size.pageHeight / size.pageWidth - 841.9 / 595.3) < 0.03);
}

for (const engine of [chromium, webkit]) {
  test(`${engine.name()}: CV dialog, tablet/mobile layout, zoom, rotation, languages and download`, { timeout: 120000 }, async () => {
    const browser = await engine.launch();
    try {
      const context = await browser.newContext({ viewport: { width: 960, height: 1140 }, deviceScaleFactor: 2, serviceWorkers: 'block', reducedMotion: 'reduce', userAgent: 'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Safari/604.1' });
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.route('**/*', route => route.request().url().startsWith(origin) ? route.continue() : route.abort());
      await page.goto(origin);
      await page.locator('.portfolio-ready').waitFor();
      await page.locator('.cv-button:visible').first().click();
      await page.locator('.cv-lang-btn--fr').click();
      let frame = page.frameLocator('.cv-viewer-frame');
      await rendered(frame);
      await page.locator('.cv-viewer-preview').waitFor({ state: 'detached' });
      await assertFit(frame);
      assert.equal(await page.locator('.cv-viewer-toolbar').count(), 1);
      assert.equal(await frame.locator('#toolbar').count(), 0);
      assert.equal(await page.locator('.cv-viewer-zoom__value').evaluate(el => getComputedStyle(el).color), 'rgb(248, 250, 252)');
      assert.equal(await page.locator('.cv-viewer-body').evaluate(el => getComputedStyle(el).backgroundColor), 'rgb(43, 43, 43)');
      assert.ok(await page.locator('.cv-viewer-toolbar').evaluate(el => el.scrollWidth <= el.clientWidth));
      await page.screenshot({ path: `tmp/cv-viewer-qa/${engine.name()}-ipad.png` });
      const initialWidth = (await frame.locator('.page').boundingBox()).width;
      await page.getByRole('button', { name: 'Zoom in' }).click();
      await page.waitForFunction(() => Number.parseInt(document.querySelector('.cv-viewer-zoom__value').textContent) > 110);
      assert.ok((await frame.locator('.page').boundingBox()).width > initialWidth * 1.15);
      await page.getByRole('button', { name: 'Zoom out' }).click();
      await page.getByRole('button', { name: 'Fit width' }).click();
      await assertFit(frame);
      await page.setViewportSize({ width: 1280, height: 800 });
      await frame.locator('.page').evaluate(el => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
      await assertFit(frame);
      await page.setViewportSize({ width: 375, height: 812 });
      await frame.locator('.page').evaluate(el => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
      await assertFit(frame);
      assert.ok(await page.locator('.cv-viewer-toolbar').evaluate(el => el.scrollWidth <= el.clientWidth));
      await page.screenshot({ path: `tmp/cv-viewer-qa/${engine.name()}-mobile.png` });
      await page.getByRole('button', { name: 'Read', exact: true }).click();
      await page.waitForFunction(() => document.querySelector('.cv-viewer-zoom__value').textContent.includes('150%'));
      await frame.locator('#viewerContainer').evaluate(el => new Promise((resolve, reject) => {
        const deadline = setTimeout(() => reject(new Error('Read mode did not pan toward the text column')), 3000);
        const check = () => {
          if (el.scrollLeft > 0) { clearTimeout(deadline); resolve(); }
          else requestAnimationFrame(check);
        };
        check();
      }));
      await page.getByRole('button', { name: 'Fit width' }).click();
      await assertFit(frame);
      await page.getByRole('button', { name: 'Zoom in' }).click({ clickCount: 7 });
      await frame.locator('#viewerContainer').evaluate(el => new Promise((resolve, reject) => {
        const deadline = setTimeout(() => reject(new Error('Zoomed PDF did not become scrollable')), 3000);
        const check = () => {
          if (el.scrollHeight > el.clientHeight) {
            el.scrollTop = el.scrollHeight;
            requestAnimationFrame(() => { clearTimeout(deadline); resolve(); });
          } else requestAnimationFrame(check);
        };
        check();
      }));
      assert.ok(await frame.locator('#viewerContainer').evaluate(el => el.scrollTop > 0));
      const downloadPromise = page.waitForEvent('download');
      await page.getByRole('button', { name: 'Download', exact: true }).click();
      assert.equal((await downloadPromise).suggestedFilename(), 'CV_Français.pdf');
      await page.getByRole('button', { name: 'Change language', exact: true }).click();
      await page.locator('.cv-lang-btn--en').click();
      frame = page.frameLocator('.cv-viewer-frame');
      await rendered(frame);
      assert.ok((await frame.locator('.textLayer').innerText()).includes('PROFILE'));
      await frame.locator('#viewerContainer').focus();
      await page.keyboard.press('Escape');
      await page.locator('.cv-viewer').waitFor({ state: 'detached' });
      assert.equal(await page.evaluate(() => document.body.style.overflow), '');
      assert.deepEqual(errors, []);
    } finally { await browser.close(); }
  });

  test(`${engine.name()}: localized reader under a base path, failure and retry`, { timeout: 60000 }, async () => {
    const browser = await engine.launch();
    try {
      const page = await browser.newPage({ viewport: { width: 320, height: 700 } });
      const file = origin + '/portfolio/assets/CV/CV_English.pdf';
      const url = origin + '/portfolio/assets/pdf-viewer/index.html?locale=fr&file=' + encodeURIComponent(file);
      await page.route('**/CV_English.pdf', route => route.abort());
      await page.goto(url);
      await page.getByRole('button', { name: 'Réessayer' }).waitFor();
      assert.equal(await page.locator('#openPdf').getAttribute('href'), file);
      assert.equal(await page.locator('#openPdf').getAttribute('target'), null);
      assert.equal(await page.locator('#openPdf').getAttribute('download'), 'CV_English.pdf');
      assert.ok((await page.locator('#status').innerText()).includes('Impossible'));
      await page.unroute('**/CV_English.pdf');
      await Promise.all([
        page.waitForEvent('load'),
        page.getByRole('button', { name: 'Réessayer' }).click()
      ]);
      await rendered(page);
      await assertFit(page);
      assert.equal(await page.locator('html').getAttribute('lang'), 'fr');
      assert.ok(await page.locator('#viewerContainer').evaluate(el => el.scrollWidth <= el.clientWidth));
    } finally { await browser.close(); }
  });

  test(`${engine.name()}: preview appears before the PDF renderer finishes`, { timeout: 60000 }, async () => {
    const browser = await engine.launch();
    try {
      const page = await browser.newPage({ viewport: { width: 960, height: 1140 }, userAgent: 'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Safari/604.1' });
      await page.route('**/pdf.min.mjs', async route => {
        await new Promise(resolve => setTimeout(resolve, 1800));
        await route.continue();
      });
      await page.goto(origin);
      await page.locator('.portfolio-ready').waitFor();
      await page.locator('.cv-button:visible').first().click();
      await page.locator('.cv-lang-btn--fr').click();
      const preview = page.locator('.cv-viewer-preview');
      await preview.waitFor();
      await preview.evaluate(el => el.decode());
      const previewBox = await preview.boundingBox();
      assert.equal(await page.locator('.cv-viewer-frame').count(), 1);
      await rendered(page.frameLocator('.cv-viewer-frame'));
      const pageBox = await page.frameLocator('.cv-viewer-frame').locator('.page').boundingBox();
      assert.ok(Math.abs(previewBox.width - pageBox.width) <= 8, `preview ${previewBox.width}, PDF ${pageBox.width}`);
      await preview.waitFor({ state: 'detached' });
    } finally { await browser.close(); }
  });

  test(`${engine.name()}: desktop embeds the native PDF viewer in the portfolio`, { timeout: 60000 }, async () => {
    const browser = await engine.launch();
    try {
      const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
      let popups = 0;
      page.on('popup', () => popups++);
      await page.goto(origin);
      await page.locator('.portfolio-ready').waitFor();
      await page.locator('.cv-button:visible').first().click();
      assert.equal(await page.locator('link[rel="modulepreload"][href*="pdfjs"]').count(), 0);
      await page.locator('.cv-lang-btn--fr').click();
      await page.locator('.cv-viewer-frame').waitFor();
      assert.equal(await page.locator('.cv-viewer-frame').getAttribute('src'), origin + '/assets/CV/CV_Fran%C3%A7ais.pdf');
      assert.equal(await page.locator('.cv-viewer-zoom').count(), 0);
      assert.equal(await page.locator('.cv-viewer-preview').count(), 0);
      assert.equal(await page.locator('.cv-viewer a[target="_blank"]').count(), 0);
      assert.equal(popups, 0);
      assert.equal(await page.locator('.cv-modal-backdrop').count(), 0);
      const response = await page.request.get(origin + '/assets/CV/CV_Fran%C3%A7ais.pdf');
      assert.ok(response.headers()['content-type'].startsWith('application/pdf'));
      await page.getByRole('button', { name: 'Change language', exact: true }).click();
      await page.locator('.cv-lang-btn--en').click();
      assert.equal(await page.locator('.cv-viewer-frame').getAttribute('src'), origin + '/assets/CV/CV_English.pdf');
      assert.equal(popups, 0);
      await page.getByRole('button', { name: 'Close', exact: true }).click();
      await page.locator('.cv-viewer').waitFor({ state: 'detached' });
      assert.equal(await page.evaluate(() => document.body.style.overflow), '');
    } finally { await browser.close(); }
  });
}
