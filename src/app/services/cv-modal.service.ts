import { PlatformLocation } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CV_ASSETS, CvLang } from 'src/constants/cvLinks';

export interface CvViewerState {
  open: boolean;
  lang: CvLang | null;
}

/**
 * Orchestre le flux CV : modale de langue → viewer PDF intégré.
 * Centralise aussi la résolution des URLs assets (base-href GitHub Pages).
 */
@Injectable({ providedIn: 'root' })
export class CvModalService {
  private readonly languageModalVisible$ = new BehaviorSubject<boolean>(false);
  private readonly viewerState$ = new BehaviorSubject<CvViewerState>({
    open: false,
    lang: null,
  });

  constructor(private readonly platformLocation: PlatformLocation) {}

  /** @deprecated Alias conservé pour app-icons-link — préférer openLanguageModal(). */
  get isVisible$() {
    return this.languageModalVisible$.asObservable();
  }

  get isVisible(): boolean {
    return this.languageModalVisible$.getValue();
  }

  get languageModalVisible() {
    return this.languageModalVisible$.asObservable();
  }

  get viewerState() {
    return this.viewerState$.asObservable();
  }

  get isViewerOpen(): boolean {
    return this.viewerState$.getValue().open;
  }

  /** Point d'entrée depuis le bouton/icône CV du portfolio. */
  open(): void {
    this.openLanguageModal();
  }

  /** Affiche la modale de sélection FR / EN. */
  openLanguageModal(): void {
    this.languageModalVisible$.next(true);
    this.lockBodyScroll(true);
  }

  /** Ferme la modale sans afficher de CV. */
  close(): void {
    this.closeLanguageModal();
  }

  closeLanguageModal(): void {
    this.languageModalVisible$.next(false);
    if (!this.viewerState$.getValue().open) {
      this.lockBodyScroll(false);
    }
  }

  /**
   * Ferme la modale de langue et ouvre le viewer avec le PDF choisi.
   */
  viewCv(lang: CvLang): void {
    this.languageModalVisible$.next(false);
    this.viewerState$.next({ open: true, lang });
    this.lockBodyScroll(true);
  }

  /** Retour à la modale de langue depuis le viewer. */
  changeLanguage(): void {
    this.viewerState$.next({ open: false, lang: null });
    this.languageModalVisible$.next(true);
  }

  /** Ferme le viewer PDF. */
  closeViewer(): void {
    this.viewerState$.next({ open: false, lang: null });
    this.lockBodyScroll(false);
  }

  /**
   * Construit l'URL absolue du PDF en tenant compte du base-href
   * (ex. /portefolio/ sur GitHub Pages, / en local).
   */
  resolvePdfUrl(lang: CvLang): string {
    const asset = CV_ASSETS[lang];
    const baseHref = this.platformLocation.getBaseHrefFromDOM();
    const normalizedBase = baseHref.endsWith('/') ? baseHref : `${baseHref}/`;
    return `${normalizedBase}${asset.path}`;
  }

  getDownloadFileName(lang: CvLang): string {
    return CV_ASSETS[lang].downloadName;
  }

  private lockBodyScroll(lock: boolean): void {
    document.body.style.overflow = lock ? 'hidden' : '';
  }
}
