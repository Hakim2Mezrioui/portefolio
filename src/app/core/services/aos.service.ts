import { Injectable } from '@angular/core';
import * as AOS from 'aos';

/**
 * AOS + Angular : init au load (preloader), refresh debouncé
 * et rescan quand une section entre dans le viewport.
 */
@Injectable({ providedIn: 'root' })
export class AosService {
  private initialized = false;
  private refreshDebounce: ReturnType<typeof setTimeout> | null = null;
  private readonly sectionObservers = new Map<string, IntersectionObserver>();

  init(): void {
    if (this.initialized) {
      return;
    }
    AOS.init({
      once: false,
      offset: 80,
      duration: 1000,
      easing: 'ease-out-cubic',
      disable: false,
    });
    this.initialized = true;
  }

  refreshHard(): void {
    if (!this.initialized) {
      return;
    }
    AOS.refreshHard();
  }

  requestRefresh(): void {
    if (!this.initialized) {
      if (document.readyState === 'complete') {
        this.init();
      } else {
        window.addEventListener(
          'load',
          () => this.requestRefresh(),
          { once: true }
        );
        return;
      }
    }
    if (this.refreshDebounce) {
      clearTimeout(this.refreshDebounce);
    }
    this.refreshDebounce = setTimeout(() => {
      this.refreshHard();
      this.refreshDebounce = null;
    }, 80);
  }

  refreshAfterRender(...extraDelaysMs: number[]): void {
    const run = () => {
      this.init();
      this.requestRefresh();
      extraDelaysMs.forEach((delay) => {
        setTimeout(() => this.requestRefresh(), delay);
      });
    };

    if (document.readyState === 'complete') {
      run();
    } else {
      window.addEventListener('load', () => run(), { once: true });
    }
  }

  watchSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    this.disconnectSection(sectionId);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.init();
          this.requestRefresh();
          [100, 400, 800].forEach((d) =>
            setTimeout(() => this.requestRefresh(), d)
          );
        }
      },
      { threshold: 0.06, rootMargin: '0px 0px -4% 0px' }
    );
    observer.observe(section);
    this.sectionObservers.set(sectionId, observer);
  }

  disconnectSection(sectionId: string): void {
    this.sectionObservers.get(sectionId)?.disconnect();
    this.sectionObservers.delete(sectionId);
  }

  /** @deprecated Utiliser watchSection('mySkills') */
  watchSkillsSection(): void {
    this.watchSection('mySkills');
  }

  disconnectSkillsWatcher(): void {
    this.disconnectSection('mySkills');
  }
}
