import { Component, Input } from '@angular/core';
import { CertificatModel } from 'src/app/models/certificatModel';

@Component({
  selector: 'app-certificat-card',
  templateUrl: './certificat-card.component.html',
  styleUrls: ['./certificat-card.component.css'],
})
export class CertificatCardComponent {
  @Input() certificat!: CertificatModel;
}
