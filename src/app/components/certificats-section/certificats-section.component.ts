import { Component } from '@angular/core';
import { CertificatModel } from 'src/app/models/certificatModel';
import { certificatsList } from 'src/constants/certificatsList';

@Component({
  selector: 'app-certificats-section',
  templateUrl: './certificats-section.component.html',
  styleUrls: ['./certificats-section.component.css'],
})
export class CertificatsSectionComponent {
  certificats: CertificatModel[] = certificatsList;
}
