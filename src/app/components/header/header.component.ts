import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { TranslateService } from 'src/app/services/translate.service';
import { CvModalService } from 'src/app/services/cv-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @ViewChild('menuIcon') menuIcon!: ElementRef<HTMLButtonElement>;
  showMenuHeader = false;
  readonly links = [
    { href: '#home', label: 'nav.home', icon: 'bi-house' },
    { href: '#mySkills', label: 'nav.mySkills', icon: 'bi-tools' },
    { href: '#myProjects', label: 'nav.myProjects', icon: 'bi-window-stack' },
    { href: '#myCareer', label: 'nav.career', icon: 'bi-briefcase' },
    { href: '#myCertificats', label: 'nav.certificats', icon: 'bi-award' },
    { href: '#myTemoignages', label: 'nav.temoignages', icon: 'bi-chat-quote' },
    { href: '#contactMe', label: 'nav.contactMe', icon: 'bi-envelope' },
  ];

  constructor(public translate: TranslateService, private cv: CvModalService, private element: ElementRef<HTMLElement>) {}

  get currentLang() { return this.translate.currentLang; }
  setLang(lang: 'en' | 'fr') { this.translate.setLanguage(lang); }
  toggleMenu() { this.showMenuHeader = !this.showMenuHeader; }
  closeMenuHeader(restoreFocus = false) {
    if (!this.showMenuHeader) return;
    this.showMenuHeader = false;
    if (restoreFocus) this.menuIcon.nativeElement.focus();
  }
  openCv() { this.closeMenuHeader(); this.cv.open(); }

  @HostListener('window:resize')
  onResize() { if (window.innerWidth > 1200) this.closeMenuHeader(); }

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent) {
    if (!this.element.nativeElement.contains(event.target as Node)) this.closeMenuHeader();
  }

  @HostListener('focusout', ['$event'])
  onFocusOut(event: FocusEvent) {
    if (event.relatedTarget && !this.element.nativeElement.contains(event.relatedTarget as Node)) this.closeMenuHeader();
  }
}
