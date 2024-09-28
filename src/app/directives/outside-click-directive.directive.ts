// outside-click.directive.ts
import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appOutsideClick]',
})
export class OutsideClickDirective {
  @Output() outsideClick = new EventEmitter<void>();

  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(target: HTMLElement): void {
    const clickedInside = this.el.nativeElement.contains(target);
    const clickedIcon = target.closest('.bi');
    if (!clickedInside && !clickedIcon) {
      this.outsideClick.emit();
    }
  }
}
