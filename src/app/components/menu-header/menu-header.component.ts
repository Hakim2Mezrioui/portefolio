import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {
  @Output() isClose = new EventEmitter<boolean>();

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

  get currentLang() {
    return this.translate.currentLang;
  }

  setLang(lang: 'en' | 'fr') {
    this.translate.setLanguage(lang);
  }

  close() {
    this.isClose.emit(false);
  }

}
