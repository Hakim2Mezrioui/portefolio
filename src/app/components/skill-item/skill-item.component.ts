import { AfterViewInit, Component, Input } from '@angular/core';
import { AosService } from 'src/app/core/services/aos.service';
import { SkillModel } from 'src/app/models/SkillModel';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css'],
})
export class SkillItemComponent implements AfterViewInit {
  @Input('skills') skills!: SkillModel[];
  @Input('title') title!: string;

  constructor(private readonly aos: AosService) {}

  ngAfterViewInit(): void {
    this.aos.requestRefresh();
  }
}
