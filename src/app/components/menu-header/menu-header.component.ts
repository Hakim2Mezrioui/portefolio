import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {
  @Output() isClose = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.isClose.emit(false);
  }

}
