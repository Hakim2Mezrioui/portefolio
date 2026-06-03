import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/core/services/theme.service';
import { TranslateService } from 'src/app/services/translate.service';

/** Bouton accessible soleil/lune pour basculer le thème. */
@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css'],
})
export class ThemeToggleComponent implements OnInit, OnDestroy {
  isDark = false;
  ariaLabel = '';

  private darkSub?: Subscription;
  private langSub?: Subscription;

  constructor(
    private readonly themeService: ThemeService,
    private readonly translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.isDark = this.themeService.isDarkMode;
    this.updateAriaLabel();

    this.darkSub = this.themeService.isDarkMode$.subscribe((isDark) => {
      this.isDark = isDark;
      this.updateAriaLabel();
    });

    this.langSub = this.translateService.onLangChange.subscribe(() => {
      this.updateAriaLabel();
    });
  }

  ngOnDestroy(): void {
    this.darkSub?.unsubscribe();
    this.langSub?.unsubscribe();
  }

  toggle(): void {
    this.themeService.toggle();
  }

  private updateAriaLabel(): void {
    this.ariaLabel = this.translateService.translate(
      this.isDark ? 'theme.switchToLight' : 'theme.switchToDark'
    );
  }
}
