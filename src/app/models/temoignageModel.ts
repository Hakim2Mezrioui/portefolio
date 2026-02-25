export class TemoignageModel {
  constructor(
    public name: string,
    public positionKey: string,
    public company: string,
    public textKey: string,
    public photo: string,
    public linkedinUrl: string,
    public date: string,
    public relationKey: string
  ) {}
}
