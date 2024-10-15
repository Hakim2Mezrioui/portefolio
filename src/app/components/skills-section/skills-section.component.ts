import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { title } from 'process';
import { SkillModel } from 'src/app/models/SkillModel';
import * as AOS from 'aos';
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
export class SkillsSectionComponent implements AfterViewInit, OnInit {
  @ViewChild('skills') skills!: ElementRef;

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

  ngOnInit(): void {
    AOS.init();
  }

  ngAfterViewInit(): void {
    // Récupère les enfants du carrousel une fois le composant initialisé
    const skills = this.skills.nativeElement
      .children as HTMLCollectionOf<HTMLElement>;

    // Appelle la fonction de carrousel chaque 2 secondes
    setInterval(() => {
      this.carousel(skills);
    }, 2000);
  }

  carousel(skills: HTMLCollectionOf<HTMLElement>) {
    const firstSkill = skills[0]; // Prend le premier élément
    firstSkill.style.transition = 'transform 0.5s ease'; // Applique la transition
    firstSkill.style.transform = 'translateX(-220px)'; // Déplace l'élément vers la gauche

    setTimeout(() => {
      firstSkill.style.transition = 'none'; // Enlève la transition pour éviter l'effet de "saut"
      firstSkill.style.transform = 'none'; // Réinitialise la position de l'élément
      this.skills.nativeElement.appendChild(firstSkill); // Remet l'élément à la fin du conteneur
    }, 500); // Durée doit correspondre à celle de la transition CSS
  }
}
