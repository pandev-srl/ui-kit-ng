import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ui-control-wrapper',
  templateUrl: './ui-control-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiControlWrapperComponent {
  @Input() id?: string;
  @Input() label: string | null = null;
  @Input() hint: string | null = null;
  @Input() errors: { [p: string]: any } = {};
  @Input() errorsMap: { [key: string]: string } = {};
  @Input() isDirtyOrTouched = false;
  @Input() hasErrors = false;
  @Input() isPending = false;
  @Input() disableValidationColors = false;
  @Input() useVerticalLabel = true;

  get printErrors(): string[] {
    const result: string[] = [];

    for (const err in this.errors) {
      if (typeof this.errors[err] === 'boolean') {
        result.push(this.errorsMap[err]);
      } else if (typeof this.errors[err] === 'string') {
        result.push(this.errors[err]);
      } else if (typeof this.errors[err] === 'object') {
        result.push(this.errorsMap[err]);
      }
    }

    return result;
  }
}
