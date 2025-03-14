import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { CareerModel } from 'src/app/models/careerModel';
import { educationList, experiencesList } from 'src/constants/careerList';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  constructor() {
    this.experiences = experiencesList;
    this.educations = educationList;
   }

  ngOnInit(): void {
    Aos.init();
  }

  experiences!: CareerModel[];
  educations!: CareerModel[];

}
