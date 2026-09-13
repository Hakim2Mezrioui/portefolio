import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { AosService } from 'src/app/core/services/aos.service';
import { TemoignageModel } from 'src/app/models/temoignageModel';
import { temoignagesList } from 'src/constants/temoignagesList';

@Component({
  selector: 'app-temoignages-section',
  templateUrl: './temoignages-section.component.html',
  styleUrls: ['./temoignages-section.component.css'],
})
export class TemoignagesSectionComponent implements AfterViewInit, OnDestroy {
  temoignages: TemoignageModel[] = temoignagesList;

  constructor(private readonly aos: AosService) {}

  ngAfterViewInit(): void {
    this.aos.watchSection('myTemoignages');
    this.aos.refreshAfterRender(300, 1000, 2000);
  }

  ngOnDestroy(): void {
    this.aos.disconnectSection('myTemoignages');
  }
}
