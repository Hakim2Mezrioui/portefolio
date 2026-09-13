import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { AosService } from 'src/app/core/services/aos.service';
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
export class SkillsSectionComponent implements AfterViewInit, OnDestroy {
  languages!: SkillModel[];
  frameworks!: SkillModel[];
  databases!: SkillModel[];
  designeTools!: SkillModel[];
  montageTools!: SkillModel[];
  othersSkills!: SkillModel[];
  electronicsSkills!: SkillModel[];

  constructor(private readonly aos: AosService) {
    this.languages = Languages;
    this.frameworks = Frameworks;
    this.databases = databases;
    this.designeTools = designeTools;
    this.othersSkills = othersSkills;
    this.montageTools = montageTools;
    this.electronicsSkills = electronicsSkills;
  }

  ngAfterViewInit(): void {
    this.aos.watchSkillsSection();
    this.aos.refreshAfterRender(300, 1000, 2500);
  }

  ngOnDestroy(): void {
    this.aos.disconnectSkillsWatcher();
  }
}
