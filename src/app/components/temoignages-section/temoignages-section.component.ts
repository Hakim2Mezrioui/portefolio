import { Component } from '@angular/core';
import { TemoignageModel } from 'src/app/models/temoignageModel';
import { temoignagesList } from 'src/constants/temoignagesList';

@Component({
  selector: 'app-temoignages-section',
  templateUrl: './temoignages-section.component.html',
  styleUrls: ['./temoignages-section.component.css'],
})
export class TemoignagesSectionComponent {
  temoignages: TemoignageModel[] = temoignagesList;
}
