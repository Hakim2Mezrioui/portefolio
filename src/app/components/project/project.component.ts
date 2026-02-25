import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ProjectModel } from 'src/app/models/projectModel';
import * as AOS from 'aos';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements AfterViewInit {
  @Input() reverse!: boolean;
  @Input() projectInfo!: ProjectModel;
  @ViewChild('project') project!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    if (this.reverse) {
      this.renderer.addClass(
        this.project.nativeElement,
        'reverse-flex-direction'
      );
    }

    const video = this.project.nativeElement.querySelector('video');
    if (video) {
      video.addEventListener('loadeddata', () => AOS.refresh());
    }
  }
}
