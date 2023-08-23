import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import {
  UI_INPUT_VALIDATION_ERROR_ICON,
  UI_INPUT_VALIDATION_PENDING_ICON,
  UI_INPUT_VALIDATION_SUCCESS_ICON,
} from '../../models';

@Component({
  selector: 'ui-input-wrapper',
  templateUrl: './ui-input-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiInputWrapperComponent {
  @Input() id?: string;
  @Input() label: string | null = null;
  @Input() hint: string | null = null;
  @Input() errors: { [p: string]: any } | ValidationErrors = {};
  @Input() errorsMap: { [key: string]: string } = {};
  @Input() isDirtyOrTouched = false;
  @Input() hasErrors = false;
  @Input() isPending = false;
  @Input() disableValidationColors = false;

  constructor(
    @Inject(UI_INPUT_VALIDATION_SUCCESS_ICON) public defaultSuccessIcon: string,
    @Inject(UI_INPUT_VALIDATION_ERROR_ICON) public defaultErrorIcon: string,
    @Inject(UI_INPUT_VALIDATION_PENDING_ICON) public defaultPendingIcon: string,
  ) {}
}
