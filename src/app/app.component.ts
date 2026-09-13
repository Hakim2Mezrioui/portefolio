import { Component, OnInit } from '@angular/core';
import { AosService } from './core/services/aos.service';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'portefolio-app';
  isLoaded = false;

  constructor(
    private readonly themeService: ThemeService,
    private readonly aos: AosService
  ) {}

  ngOnInit(): void {
    this.themeService.init();
  }

  onLoaded(): void {
    this.aos.refreshAfterRender(100, 400, 900);

    setTimeout(() => {
      this.isLoaded = true;
      this.aos.refreshHard();
    }, 700);
  }
}
