import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portefolio-app';
  isLoaded = false;

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
