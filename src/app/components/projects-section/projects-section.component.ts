import { Component, OnInit } from '@angular/core';
import { ProjectModel } from 'src/app/models/projectModel';
import { projects } from 'src/constants/projectsList';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css'],
})
export class ProjectsSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.projectsList = projects;
  }

  projectsList!: ProjectModel[];
}
