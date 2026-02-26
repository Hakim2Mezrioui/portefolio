export class ProjectModel {
  constructor(
    public titleKey: string,
    public descriptionKey: string,
    public demoPath: string,
    public githubLink: string,
    public demoLink: string,
    public technologies: string[],
    public posterPath: string
  ) {}
}
