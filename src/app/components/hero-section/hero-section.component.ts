import { Component, OnInit } from '@angular/core';
import { HeroSectionModel } from 'src/app/models/heroSectionModel';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent implements OnInit {
  heroSectionContent!: HeroSectionModel;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
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
}
