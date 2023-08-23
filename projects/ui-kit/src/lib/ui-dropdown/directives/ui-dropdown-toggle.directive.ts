import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[uiDropdownToggle]',
})
export class UiDropdownToggleDirective {
  @HostListener('click') onClick(): void {
    this.toggled.emit();
  }

  @Output() toggled = new EventEmitter<void>();

  constructor() {}
}
