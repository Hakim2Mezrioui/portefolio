import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ProjectModel } from 'src/app/models/projectModel';
import * as AOS from "aos";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit, AfterViewChecked {
  @Input('reverse') reverse!: boolean;
  @ViewChild('project') project!: ElementRef;
  @Input('projectInfo') projectInfo!: ProjectModel;

  constructor(private rendered2: Renderer2) {}

  ngOnInit(): void {
    AOS.init();
  }

  ngAfterViewChecked(): void {
    console.log(this.reverse);

    if (this.reverse === true) {
      this.rendered2.addClass(
        this.project.nativeElement,
        'reverse-flex-direction'
      );
    }
  }
}
