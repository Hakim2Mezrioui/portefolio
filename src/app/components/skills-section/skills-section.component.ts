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

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css'],
})
export class SkillsSectionComponent implements AfterViewInit, OnInit {
  @ViewChild('skills') skills!: ElementRef;

  constructor() {}

  skillsLanguage: SkillModel[] = [
    new SkillModel(
      'HTML',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png'
    ),
    new SkillModel(
      'CSS',
      'https://cdn-icons-png.flaticon.com/512/5968/5968242.png'
    ),
    new SkillModel(
      'JavaScript',
      'https://i1.wp.com/www.keesmel.com/wp-content/uploads/2020/09/js-logo.png?fit=500%2C500'
    ),
    new SkillModel(
      'Bootstrap',
      'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg'
    ),
    new SkillModel(
      'C-Sharp',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png'
    ),
    new SkillModel('PHP', 'https://cdnlogo.com/logos/p/71/php.svg'),

    // 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
  ];
  skillsFramework: SkillModel[] = [
    new SkillModel(
      'Express.js',
      'https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png'
    ),
    new SkillModel(
      'Angular',
      'https://static-00.iconduck.com/assets.00/angularjs-original-icon-1933x2048-ubf58qtw.png'
    ),
    new SkillModel(
      'React',
      'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
    ),
    new SkillModel(
      'Flutter',
      'https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png'
    ),
    new SkillModel(
      '.NET Core',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png'
    ),
  ];

  databases: SkillModel[] = [
    new SkillModel('MySql', 'https://pngimg.com/d/mysql_PNG23.png'),
    new SkillModel(
      'Sql Server',
      'https://www.geekandjob.com/uploads/wiki/43b8c92d2a8fcd2a95ae6bf30c18494dae92467a.png'
    ),
    new SkillModel(
      'MongoDB',
      'https://cdnlogo.com/logos/m/30/mongodb-icon.svg'
    ),
  ];

  designeTools: SkillModel[] = [
    new SkillModel(
      'Adobe Photoshop',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png'
    ),
    new SkillModel(
      'Adobe Premiere Pro',
      'https://logodownload.org/wp-content/uploads/2019/10/adobe-premiere-pro-logo-1-1.png'
    ),
    new SkillModel(
      'Filmora',
      'https://freelogopng.com/images/all_img/1682566315logo-filmora.png'
    ),
    new SkillModel(
      'Figma',
      'https://cdn.sanity.io/images/599r6htc/regionalized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format'
    ),
    new SkillModel(
      'Camtasia',
      'https://img.softorage.com/software-logo/camtasia.webp'
    ),
  ];
  othersSkills: SkillModel[] = [
    new SkillModel('Solidworks', '../../../assets/images/solidwork.png'),
    new SkillModel(
      'Tinkercad',
      'https://morseinstitute.org/wp-content/uploads/2017/12/logo-tinkercad-256.png'
    ),
  ];

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
