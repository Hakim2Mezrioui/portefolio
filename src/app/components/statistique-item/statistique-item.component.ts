import { Component, Input, OnInit } from '@angular/core';
import { StatiqueModel } from 'src/app/models/statiqueModel';

@Component({
  selector: 'app-statistique-item',
  templateUrl: './statistique-item.component.html',
  styleUrls: ['./statistique-item.component.css']
})
export class StatistiqueItemComponent implements OnInit {
  @Input("statique") statique!: StatiqueModel;

  constructor() {
    console.log(this.statique);
  }

  ngOnInit(): void {
  }

}
