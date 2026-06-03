import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CvLang } from 'src/constants/cvLinks';
import { CvModalService } from 'src/app/services/cv-modal.service';

/** Modale de sélection de la langue du CV (FR / EN). */
@Component({
  selector: 'app-cv-language-modal',
  templateUrl: './cv-language-modal.component.html',
  styleUrls: ['./cv-language-modal.component.css'],
})
export class CvLanguageModalComponent implements OnInit, OnDestroy {
  isVisible = false;
  private visibilitySub?: Subscription;

  constructor(private readonly cvModalService: CvModalService) {}

  ngOnInit(): void {
    this.visibilitySub = this.cvModalService.languageModalVisible.subscribe(
      (visible) => (this.isVisible = visible)
    );
  }

  ngOnDestroy(): void {
    this.visibilitySub?.unsubscribe();
  }

  /** Fermeture via le bouton, le backdrop ou la touche Échap. */
  close(): void {
    this.cvModalService.close();
  }

  /** Ferme la modale et affiche le CV sur le site. */
  selectLanguage(lang: CvLang): void {
    this.cvModalService.viewCv(lang);
  }

  /** Empêche la propagation pour ne pas fermer en cliquant dans le panneau. */
  onPanelClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isVisible) {
      this.close();
    }
  }
}
