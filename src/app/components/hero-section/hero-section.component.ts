import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import * as AOS from 'aos';
import { HeroSectionModel } from 'src/app/models/heroSectionModel';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent implements OnInit, AfterViewInit {
  @ViewChild('tiltElement', { static: false }) tiltElement!: ElementRef;

  heroSectionContent!: HeroSectionModel;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    AOS.init();
    this.updateContent();
    this.translate.onLangChange.subscribe(() => this.updateContent());
  }

  private updateContent(): void {
    const t = this.translate;
    this.heroSectionContent = new HeroSectionModel(
      t.translate('hero.welcome'),
      t.translate('hero.myName'),
      t.translate('hero.jobTitle'),
      t.translate('hero.profile')
    );
  }

  ngAfterViewInit() {
    const isTouchOrSmallScreen =
      window.matchMedia('(max-width: 900px)').matches ||
      'ontouchstart' in window;
    if (!isTouchOrSmallScreen && this.tiltElement?.nativeElement) {
      VanillaTilt.init(this.tiltElement.nativeElement, {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      });
    }
  }
}
