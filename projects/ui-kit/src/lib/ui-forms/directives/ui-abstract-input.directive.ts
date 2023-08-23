import { Directive, Input } from '@angular/core';
import { UiAbstractControlDirective } from './ui-abstract-control.directive';

@Directive()
export class UiAbstractInputDirective<T> extends UiAbstractControlDirective<T> {
  @Input() optional: boolean | null = null;
  @Input() hint: string | null = null;
  @Input() autocomplete?: string;

  onBlur(): void {
    this.control?.markAsTouched();
    this.setupStatus();
  }

  onModelChange(event: any): void {
    this.writeValue(event);
    this.onChange(this.value);
  }
}
