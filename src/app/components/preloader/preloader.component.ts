import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit, OnDestroy {
  @Output() loaded = new EventEmitter<void>();
  hiding = false;
  private completed = false;
  private fallbackTimer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    window.addEventListener('load', () => this.hide());
    setTimeout(() => this.hide(), 4000);
  }

  ngOnDestroy(): void {
    if (this.fallbackTimer) {
      clearTimeout(this.fallbackTimer);
    }
  }

  private hide(): void {
    if (this.hiding) return;
    this.hiding = true;
    // Fallback for browsers that do not emit a transition event.
    this.fallbackTimer = setTimeout(() => this.complete(), 1000);
  }

  onTransitionEnd(event: TransitionEvent): void {
    if (event.propertyName === 'opacity') {
      this.complete();
    }
  }

  private complete(): void {
    if (this.completed) return;
    this.completed = true;
    if (this.fallbackTimer) {
      clearTimeout(this.fallbackTimer);
      this.fallbackTimer = undefined;
    }
    this.loaded.emit();
  }
}
