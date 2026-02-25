import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { CertificatModel } from 'src/app/models/certificatModel';
import { certificatsList } from 'src/constants/certificatsList';

@Component({
  selector: 'app-certificats-section',
  templateUrl: './certificats-section.component.html',
  styleUrls: ['./certificats-section.component.css'],
})
export class CertificatsSectionComponent implements OnInit {
  certificats: CertificatModel[] = certificatsList;

  ngOnInit(): void {
    Aos.init();
  }
}
