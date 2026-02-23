export class ExpertiseModel {
  constructor(
    public icon: string,
    public titleKey: string,
    public descKey: string
  ) {
    this.icon = icon;
    this.titleKey = titleKey;
    this.descKey = descKey;
  }
}
