import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
} from '@angular/core';

/**
 * Carrés décoratifs fixés en bas à gauche.
 * Deux instances : hero (reste du site) et certifications (entre fond et cartes).
 * Une seule visible à la fois selon la section certifications à l’écran.
 */
@Component({
  selector: 'app-decoration',
  templateUrl: './decoration.component.html',
  styleUrls: ['./decoration.component.css'],
})
export class DecorationComponent implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;
  private readonly inCertSection: boolean;

  constructor(private readonly host: ElementRef<HTMLElement>) {
    this.inCertSection = !!this.host.nativeElement.closest('.certificats-shell');
    this.host.nativeElement.style.visibility = this.inCertSection
      ? 'hidden'
      : 'visible';
  }

  ngAfterViewInit(): void {
    const certSection = document.getElementById('myCertificats');
    if (!certSection) {
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => this.updateVisibility(entry.isIntersecting),
      { threshold: 0.08 }
    );
    this.observer.observe(certSection);

    const rect = certSection.getBoundingClientRect();
    const certInView = rect.top < window.innerHeight && rect.bottom > 0;
    this.updateVisibility(certInView);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private updateVisibility(certInView: boolean): void {
    const show = this.inCertSection ? certInView : !certInView;
    this.host.nativeElement.style.visibility = show ? 'visible' : 'hidden';
  }
}
