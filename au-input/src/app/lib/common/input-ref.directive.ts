import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: 'au-fa-input input'
})
export class InputRefDirective {
  focus: boolean = false;

  constructor() {
  }

  @HostListener('focus')
  onFocus(): void {
    this.focus = true;
  }

  @HostListener('blur')
  onBlur(): void {
    this.focus = false;
  }
}
