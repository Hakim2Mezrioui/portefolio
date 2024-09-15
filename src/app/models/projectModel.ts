export class ProjectModel {
  constructor(
    public title: string,
    public description: string,
    public demoPath: string,
    public githubLink: string,
    public demoLink: string,
    public technologies: string[]
  ) {}
}
