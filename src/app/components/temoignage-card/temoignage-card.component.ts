import { AfterViewInit, Component, Input } from '@angular/core';
import { AosService } from 'src/app/core/services/aos.service';
import { TemoignageModel } from 'src/app/models/temoignageModel';

@Component({
  selector: 'app-temoignage-card',
  templateUrl: './temoignage-card.component.html',
  styleUrls: ['./temoignage-card.component.css'],
})
export class TemoignageCardComponent implements AfterViewInit {
  @Input() temoignage!: TemoignageModel;
  /** Délai AOS échelonné (ms), fourni par *ngFor dans la section. */
  @Input() aosDelay = '0';

  constructor(private readonly aos: AosService) {}

  ngAfterViewInit(): void {
    this.aos.requestRefresh();
  }

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
