import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {
  @Output() loaded = new EventEmitter<void>();
  hiding = false;

  ngOnInit(): void {
    window.addEventListener('load', () => this.hide());
    setTimeout(() => this.hide(), 4000);
  }

  private hide(): void {
    if (this.hiding) return;
    this.hiding = true;
    setTimeout(() => this.loaded.emit(), 600);
  }
}
