import { Component, Input } from '@angular/core';
import { SkillModel } from 'src/app/models/SkillModel';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css'],
})
export class SkillItemComponent {
  @Input('skills') skills!: SkillModel[];
  @Input('title') title!: String;

  constructor() {}
}
