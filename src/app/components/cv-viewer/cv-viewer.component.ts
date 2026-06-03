import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { CvLang } from 'src/constants/cvLinks';
import { CvModalService, CvViewerState } from 'src/app/services/cv-modal.service';

/** Viewer plein écran du CV (iframe) avec barre d'actions. */
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

  constructor(
    private readonly cvModalService: CvModalService,
    private readonly sanitizer: DomSanitizer
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

  private applyViewerState(state: CvViewerState): void {
    this.isOpen = state.open;
    this.selectedLang = state.lang;

    if (state.open && state.lang) {
      const pdfUrl = this.cvModalService.resolvePdfUrl(state.lang);
      this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(pdfUrl);
      return;
    }

    this.safePdfUrl = null;
  }
}
