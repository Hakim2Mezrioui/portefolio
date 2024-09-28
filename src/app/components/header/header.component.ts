import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('menuHeader') menuHeader!: ElementRef;
  @ViewChild('menuIcon') menuIcon!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  showMenuHeader: boolean = false;
  start: boolean = false;

  toogle() {
    this.showMenuHeader = !this.showMenuHeader;
    this.start = true;
    console.log("toggle");
  }

  closeMenuHeader(){
    this.showMenuHeader = false;
    console.log("closeMenuHeader");
  }
}
