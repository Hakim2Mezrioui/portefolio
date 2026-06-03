import { Component } from '@angular/core';
import { CvModalService } from 'src/app/services/cv-modal.service';

@Component({
  selector: 'app-icons-link',
  templateUrl: './icons-link.component.html',
  styleUrls: ['./icons-link.component.css']
})
export class IconsLinkComponent {
  constructor(private readonly cvModalService: CvModalService) {}

  /** Ouvre la modale de choix de langue au lieu d'un lien PDF direct. */
  openCvModal(): void {
    this.cvModalService.open();
  }
}
