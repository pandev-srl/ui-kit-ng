import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UiInputTextComponent } from '../ui-input-text/ui-input-text.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ui-input-textarea',
  templateUrl: './ui-input-textarea.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: UiInputTextareaComponent,
      multi: true,
    },
  ],
})
export class UiInputTextareaComponent extends UiInputTextComponent {
  @Input() rows = 5;
  @Input() resizable = false;
}
