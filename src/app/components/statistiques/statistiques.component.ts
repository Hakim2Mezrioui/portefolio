import { Component } from '@angular/core';
import { StatiqueModel } from 'src/app/models/statiqueModel';
import { statiquesList } from 'src/constants/statiquesList';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css'],
})
export class StatistiquesComponent {
  constructor() {
    this.statiques = statiquesList;
  }

  statiques!: StatiqueModel[];
}
