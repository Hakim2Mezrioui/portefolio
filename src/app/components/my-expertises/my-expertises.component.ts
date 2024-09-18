import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { ExpertiseModel } from 'src/app/models/expertiseModel';
import { expertisesList } from 'src/constants/expertisesList';

@Component({
  selector: 'app-my-expertises',
  templateUrl: './my-expertises.component.html',
  styleUrls: ['./my-expertises.component.css']
})
export class MyExpertisesComponent implements OnInit {

  constructor() {
    this.expertises = expertisesList;
  }

  ngOnInit(): void {
    Aos.init();
  }

  expertises!: ExpertiseModel[];

}
