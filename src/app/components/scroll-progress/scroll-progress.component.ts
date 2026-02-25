import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  templateUrl: './scroll-progress.component.html',
  styleUrls: ['./scroll-progress.component.css']
})
export class ScrollProgressComponent {
  progress = 0;

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  }
}
