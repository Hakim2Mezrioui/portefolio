import { Component } from '@angular/core';
import { CareerModel } from 'src/app/models/careerModel';
import { educationList, experiencesList } from 'src/constants/careerList';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {

  constructor() {
    this.experiences = experiencesList;
    this.educations = educationList;
   }

  experiences!: CareerModel[];
  educations!: CareerModel[];

}
