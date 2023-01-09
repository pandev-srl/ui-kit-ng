import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UiAbstractInputDirective } from '../../directives/ui-abstract-input.directive';

@Component({
  selector: 'ui-input-number',
  templateUrl: './ui-input-number.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: UiInputNumberComponent,
      multi: true,
    },
  ],
})
export class UiInputNumberComponent extends UiAbstractInputDirective<number | null> {
  @Input() min: number | null = null;
  @Input() max: number | null = null;
  @Input() step = 1;
  @Input() precision = 0;
  @Input() showBrowserSpins = false;

  override get value(): number | null {
    return super.value;
  }

  override set value(value: number | null) {
    super.value = value;
  }

  override writeValue(obj: number): void {
    this.value = obj;
    this.cdr.markForCheck();
  }

  onUserInput(): void {
    window.setTimeout(() => {
      this.userInput.emit(super.value || undefined);
    }, 20);
  }

  onValueChange(): void {
    window.setTimeout(() => {
      this.valueChange.emit(super.value || undefined);
    }, 20);
  }
}
