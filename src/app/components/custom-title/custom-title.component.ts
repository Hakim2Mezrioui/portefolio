import { Component, Input, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-custom-title',
  templateUrl: './custom-title.component.html',
  styleUrls: ['./custom-title.component.css'],
})
export class CustomTitleComponent implements OnInit {
  @Input('title') title!: string;

  constructor() {}

  ngOnInit(): void {
    Aos.init()
  }
}
