import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-my-expertises',
  templateUrl: './my-expertises.component.html',
  styleUrls: ['./my-expertises.component.css']
})
export class MyExpertisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init();
  }

}
