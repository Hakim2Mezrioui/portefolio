import { Component, Input, OnInit } from '@angular/core';
import { CareerModel } from 'src/app/models/careerModel';

@Component({
  selector: 'app-career-card',
  templateUrl: './career-card.component.html',
  styleUrls: ['./career-card.component.css'],
})
export class CareerCardComponent implements OnInit {
  @Input('data') data!: CareerModel;

  constructor() {}

  ngOnInit(): void {}
}
