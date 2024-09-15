import { Component, Input, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { SkillModel } from 'src/app/models/SkillModel';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css'],
})
export class SkillItemComponent implements OnInit {
  @Input('skills') skills!: SkillModel[];
  @Input('title') title!: String;

  constructor() {}

  ngOnInit(): void {
    Aos.init();
  }
}
