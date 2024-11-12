import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UiInputTextComponent } from '../ui-input-text/ui-input-text.component';

@Component({
  selector: 'ui-input-text-floated',
  templateUrl: './ui-input-text-floated.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: UiInputTextFloatedComponent,
      multi: true,
    },
  ],
})
export class UiInputTextFloatedComponent extends UiInputTextComponent {}
