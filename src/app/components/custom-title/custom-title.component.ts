import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-title',
  templateUrl: './custom-title.component.html',
  styleUrls: ['./custom-title.component.css'],
})
export class CustomTitleComponent {
  @Input('title') title!: string;
  @Input() subtitle?: string;

  constructor() {}
}
