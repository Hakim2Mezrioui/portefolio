import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portefolio-app';
  isLoaded = false;

  constructor(private readonly themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.init();
  }

  onLoaded(): void {
    AOS.init({
      once: false,
      offset: 50,
      duration: 1000,
      easing: 'ease-out-cubic'
    });
    setTimeout(() => {
      this.isLoaded = true;
    }, 700);
  }
}
