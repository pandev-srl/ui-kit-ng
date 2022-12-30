import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UiAbstractInputDirective } from '../../directives/ui-abstract-input.directive';

@Component({
  selector: 'ui-checkbox',
  templateUrl: './ui-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: UiCheckboxComponent,
    },
  ],
})
export class UiCheckboxComponent extends UiAbstractInputDirective<boolean | null> {
  @Input() indeterminate = false;

  @HostBinding('tabindex') tabindex = 0;

  @HostListener('keydown', ['$event'])
  handleKeyDown($event: KeyboardEvent): void {
    const keyCode = $event.code;

    switch (keyCode) {
      case 'Space':
        $event.preventDefault();
        this.handleSpace();
        break;
      case 'Tab':
      default:
    }
  }

  onClick(): void {
    let newValue: boolean | null;
    if (this.value === true) {
      newValue = false;
    } else if (this.value === false) {
      newValue = this.indeterminate ? null : true;
    } else {
      newValue = this.value === null;
    }

    this.writeValue(newValue);
    this.onChange(newValue);
    this.cdr.markForCheck();
    this.userInput.emit(newValue || false);
    this.valueChange.emit(newValue || false);
  }

  private handleSpace(): void {
    this.onClick();
  }
}
