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
import { heroSectionContent } from 'src/constants/heroSectionContent';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent implements OnInit, AfterViewInit {
  @ViewChild('tiltElement', { static: false }) tiltElement!: ElementRef;

  heroSectionContent!: HeroSectionModel;

  constructor() {}

  ngOnInit(): void {
    AOS.init();
    this.heroSectionContent = heroSectionContent;
  }

  ngAfterViewInit() {
    VanillaTilt.init(this.tiltElement.nativeElement, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });
  }
}
