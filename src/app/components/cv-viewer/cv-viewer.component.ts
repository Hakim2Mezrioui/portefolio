import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { CvLang } from 'src/constants/cvLinks';
import { CvModalService, CvViewerState } from 'src/app/services/cv-modal.service';
import { TranslateService } from 'src/app/services/translate.service';

/** Full-screen CV reader backed by the locally hosted PDF.js viewer. */
@Component({
  selector: 'app-cv-viewer',
  templateUrl: './cv-viewer.component.html',
  styleUrls: ['./cv-viewer.component.css'],
})
export class CvViewerComponent implements OnInit, OnDestroy {
  isOpen = false;
  selectedLang: CvLang | null = null;
  safePdfUrl: SafeResourceUrl | null = null;

  private viewerSub?: Subscription;
  @ViewChild('pdfFrame') private pdfFrame?: ElementRef<HTMLIFrameElement>;

  constructor(
    private readonly cvModalService: CvModalService,
    private readonly sanitizer: DomSanitizer,
    private readonly translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.viewerSub = this.cvModalService.viewerState.subscribe((state) => {
      this.applyViewerState(state);
    });
  }

  ngOnDestroy(): void {
    this.viewerSub?.unsubscribe();
  }

  changeLanguage(): void {
    this.cvModalService.changeLanguage();
  }

  downloadCv(): void {
    if (!this.selectedLang) {
      return;
    }

    const url = this.cvModalService.resolvePdfUrl(this.selectedLang);
    const fileName = this.cvModalService.getDownloadFileName(this.selectedLang);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.rel = 'noopener';
    link.click();
  }

  close(): void {
    this.cvModalService.closeViewer();
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isOpen) {
      this.close();
    }
  }

  @HostListener('window:message', ['$event'])
  onViewerMessage(event: MessageEvent): void {
    if (this.isOpen && event.origin === window.location.origin &&
        event.source === this.pdfFrame?.nativeElement.contentWindow &&
        event.data?.type === 'cv-viewer-close') {
      this.close();
    }
  }

  private applyViewerState(state: CvViewerState): void {
    this.isOpen = state.open;
    this.selectedLang = state.lang;

    if (state.open && state.lang) {
      const pdfUrl = new URL(this.cvModalService.resolvePdfUrl(state.lang), document.baseURI);
      const viewerUrl = new URL('../pdf-viewer/index.html', pdfUrl);
      viewerUrl.searchParams.set('file', pdfUrl.href);
      viewerUrl.searchParams.set('locale', this.translate.currentLang);
      this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(viewerUrl.href);
      return;
    }

    this.safePdfUrl = null;
  }
}
