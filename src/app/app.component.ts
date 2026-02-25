import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'portefolio-app';
  isLoaded = false;

  ngAfterViewInit(): void {
    this.initAOS();
  }

  onLoaded(): void {
    this.isLoaded = true;
    setTimeout(() => {
      AOS.refreshHard();
    }, 100);
  }

  private initAOS(): void {
    AOS.init({
      once: false,
      offset: 50,
      duration: 500,
      easing: 'ease-out-cubic',
      disable: false
    });

    window.addEventListener('load', () => {
      AOS.refreshHard();
    });
  }
}
