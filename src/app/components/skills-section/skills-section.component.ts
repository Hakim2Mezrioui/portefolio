import { AfterViewInit, Component } from '@angular/core';
import * as AOS from 'aos';
import { SkillModel } from 'src/app/models/SkillModel';
import {
  databases,
  designeTools,
  electronicsSkills,
  Frameworks,
  Languages,
  montageTools,
  othersSkills,
} from 'src/constants/skillsList';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css'],
})
export class SkillsSectionComponent implements AfterViewInit {
  languages!: SkillModel[];
  frameworks!: SkillModel[];
  databases!: SkillModel[];
  designeTools!: SkillModel[];
  montageTools!: SkillModel[];
  othersSkills!: SkillModel[];
  electronicsSkills!: SkillModel[];

  constructor() {
    this.languages = Languages;
    this.frameworks = Frameworks;
    this.databases = databases;
    this.designeTools = designeTools;
    this.othersSkills = othersSkills;
    this.montageTools = montageTools;
    this.electronicsSkills = electronicsSkills;
  }

  /**
   * Recalcule AOS après rendu des app-skill-item (*ngFor internes).
   * Sans refresh, fade-right / fade-left peuvent ne plus se déclencher.
   */
  ngAfterViewInit(): void {
    // refreshHard force AOS à rescanner tous les noeuds data-aos
    // après que les composants enfants aient été rendus.
    setTimeout(() => AOS.refreshHard(), 150);
  }
}
