import { Component, Input } from '@angular/core';
import { TemoignageModel } from 'src/app/models/temoignageModel';

@Component({
  selector: 'app-temoignage-card',
  templateUrl: './temoignage-card.component.html',
  styleUrls: ['./temoignage-card.component.css'],
})
export class TemoignageCardComponent {
  @Input() temoignage!: TemoignageModel;

  readonly recommendationsUrl = 'https://www.linkedin.com/in/hakim-mezrioui/details/recommendations/?detailScreenTabIndex=0';

  get initials(): string {
    return this.temoignage.name
      .split(' ')
      .map(w => w.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }
}
