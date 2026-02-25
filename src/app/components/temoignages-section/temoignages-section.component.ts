import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { TemoignageModel } from 'src/app/models/temoignageModel';
import { temoignagesList } from 'src/constants/temoignagesList';

@Component({
  selector: 'app-temoignages-section',
  templateUrl: './temoignages-section.component.html',
  styleUrls: ['./temoignages-section.component.css'],
})
export class TemoignagesSectionComponent implements OnInit {
  temoignages: TemoignageModel[] = temoignagesList;

  ngOnInit(): void {
    Aos.init();
  }
}
