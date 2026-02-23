import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lang, getTranslation } from '../i18n/translations';

const STORAGE_KEY = 'portfolio_lang';

@Injectable({ providedIn: 'root' })
export class TranslateService {
  private readonly currentLang$ = new BehaviorSubject<Lang>(this.loadStoredLang());

  constructor() {
    this.currentLang$.next(this.loadStoredLang());
  }

  get currentLang(): Lang {
    return this.currentLang$.getValue();
  }

  get onLangChange() {
    return this.currentLang$.asObservable();
  }

  setLanguage(lang: Lang): void {
    this.currentLang$.next(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {}
  }

  translate(key: string): string {
    return getTranslation(this.currentLang, key);
  }

  private loadStoredLang(): Lang {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'fr') return stored;
    } catch (_) {}
    return 'en';
  }
}
