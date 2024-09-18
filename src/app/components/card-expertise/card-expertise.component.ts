import { Component, Input, OnInit } from '@angular/core';
import { ExpertiseModel } from 'src/app/models/expertiseModel';

@Component({
  selector: 'app-card-expertise',
  templateUrl: './card-expertise.component.html',
  styleUrls: ['./card-expertise.component.css'],
})
export class CardExpertiseComponent implements OnInit {
  @Input('expertise') expertise!: ExpertiseModel;

  constructor() {}

  ngOnInit(): void {}
}
