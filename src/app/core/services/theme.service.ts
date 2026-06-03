import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ThemeMode = 'light' | 'dark';

/** Clé localStorage partagée avec le script inline dans index.html. */
export const THEME_STORAGE_KEY = 'portfolio_theme';

/**
 * Gère le thème clair/sombre : persistance, préférence système et classe `dark` sur <html>.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly darkModeSubject$ = new BehaviorSubject<boolean>(false);
  private keyboardListenerRegistered = false;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  /** Flux réactif du mode sombre actif. */
  get isDarkMode$() {
    return this.darkModeSubject$.asObservable();
  }

  get isDarkMode(): boolean {
    return this.darkModeSubject$.getValue();
  }

  /**
   * À appeler une fois au démarrage (AppComponent).
   * Synchronise le BehaviorSubject avec la classe déjà appliquée par le script inline.
   */
  init(): void {
    const isDark = this.document.documentElement.classList.contains('dark');
    this.darkModeSubject$.next(isDark);
    this.updateThemeColorMeta(isDark);
    this.registerKeyboardShortcut();
  }

  /** Bascule entre clair et sombre. */
  toggle(): void {
    this.setDarkMode(!this.darkModeSubject$.getValue());
  }

  setDarkMode(isDark: boolean): void {
    this.darkModeSubject$.next(isDark);
    this.applyTheme(isDark);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
    } catch {
      /* stockage indisponible (mode privé, etc.) */
    }
    this.updateThemeColorMeta(isDark);
  }

  /** Ajoute ou retire la classe `dark` sur l'élément racine. */
  applyTheme(isDark: boolean): void {
    const root = this.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }

  /**
   * Résout le thème initial (utilisé par le script inline et en secours).
   * Priorité : localStorage → prefers-color-scheme.
   */
  static resolveInitialDarkMode(): boolean {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored === 'dark') {
        return true;
      }
      if (stored === 'light') {
        return false;
      }
    } catch {
      /* ignore */
    }

    return (
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-color-scheme: dark)').matches === true
    );
  }

  private registerKeyboardShortcut(): void {
    if (this.keyboardListenerRegistered || typeof window === 'undefined') {
      return;
    }

    window.addEventListener('keydown', (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (key !== 'l' || !event.shiftKey) {
        return;
      }
      if (!event.ctrlKey && !event.metaKey) {
        return;
      }
      event.preventDefault();
      this.toggle();
    });

    this.keyboardListenerRegistered = true;
  }

  private updateThemeColorMeta(isDark: boolean): void {
    const meta = this.document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', isDark ? '#0f172a' : '#03346e');
    }
  }
}
