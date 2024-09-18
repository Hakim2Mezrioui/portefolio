import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { StatiqueModel } from 'src/app/models/statiqueModel';
import { statiquesList } from 'src/constants/statiquesList';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css'],
})
export class StatistiquesComponent implements OnInit {
  constructor() {
    this.statiques = statiquesList;
  }

  ngOnInit(): void {
    Aos.init();
  }

  statiques!: StatiqueModel[];
}
