import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css'],
})
export class SkillsSectionComponent implements AfterViewInit {
  @ViewChild('skills') skills!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    // Récupère les enfants du carrousel une fois le composant initialisé
    const skills = this.skills.nativeElement.children as HTMLCollectionOf<HTMLElement>;
    
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
