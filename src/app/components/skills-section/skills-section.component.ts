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

  constructor() {

  }

   skillsLanguage: string[] = [
    "https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
    "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
    "https://i1.wp.com/www.keesmel.com/wp-content/uploads/2020/09/js-logo.png?fit=500%2C500",
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
  ];
  skillsFramework: string[] = [
    "https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
    "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
    "https://i1.wp.com/www.keesmel.com/wp-content/uploads/2020/09/js-logo.png?fit=500%2C500",
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
  ];

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
