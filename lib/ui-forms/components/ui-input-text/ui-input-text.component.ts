import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UiAbstractInputDirective } from '../../directives/ui-abstract-input.directive';
import { UiInputTextType } from '../../models';

@Component({
  selector: 'ui-input-text',
  templateUrl: './ui-input-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: UiInputTextComponent,
      multi: true,
    },
  ],
})
export class UiInputTextComponent extends UiAbstractInputDirective<string | null> {
  @Input() type: UiInputTextType = 'text';

  override get value(): string | null {
    return super.value;
  }

  override set value(value: string | null) {
    super.value = value == '' ? null : value;
  }

  override writeValue(obj: any): void {
    this.value = obj == '' ? null : obj;
    this.cdr.markForCheck();
  }

  onUserInput(): void {
    this.userInput.emit(super.value);
  }

  onValueChange(): void {
    this.valueChange.emit(super.value);
  }
}
