import { Component } from '@angular/core';
import { ExpertiseModel } from 'src/app/models/expertiseModel';
import { expertisesList } from 'src/constants/expertisesList';

@Component({
  selector: 'app-my-expertises',
  templateUrl: './my-expertises.component.html',
  styleUrls: ['./my-expertises.component.css']
})
export class MyExpertisesComponent {

  constructor() {
    this.expertises = expertisesList;
  }

  expertises!: ExpertiseModel[];

}
