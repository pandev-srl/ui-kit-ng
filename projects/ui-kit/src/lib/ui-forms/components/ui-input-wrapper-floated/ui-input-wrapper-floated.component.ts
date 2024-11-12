import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiInputWrapperComponent } from '../ui-input-wrapper/ui-input-wrapper.component';

@Component({
  selector: 'ui-input-wrapper-floated',
  templateUrl: './ui-input-wrapper-floated.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiInputWrapperFloatedComponent extends UiInputWrapperComponent {}
