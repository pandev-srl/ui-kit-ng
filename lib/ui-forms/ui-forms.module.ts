import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiInputTextComponent } from './components/ui-input-text/ui-input-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  UI_INPUT_VALIDATION_ERROR_ICON,
  UI_INPUT_VALIDATION_PENDING_ICON,
  UI_INPUT_VALIDATION_SUCCESS_ICON,
  UI_SELECT_CARET_CLOSE_ICON,
  UI_SELECT_CARET_OPEN_ICON,
  UI_SELECT_CLEAR_ICON,
} from './models';
import { UiIconModule } from '../ui-icon';
import { UiInputWrapperComponent } from './components/ui-input-wrapper/ui-input-wrapper.component';
import { UiInputTextareaComponent } from './components/ui-input-textarea/ui-input-textarea.component';
import { UiInputNumberComponent } from './components/ui-input-number/ui-input-number.component';
import { UiFieldDisplayComponent } from './components/ui-field-display/ui-field-display.component';
import { UiControlWrapperComponent } from './components/ui-control-wrapper/ui-control-wrapper.component';
import { UiCheckboxComponent } from './components/ui-checkbox/ui-checkbox.component';
import { UiSelectComponent } from './components/ui-select/ui-select.component';
import { UiClickOutsideModule } from '../ui-click-outside';
import { UiToSelectOptionPipe } from './directives/ui-to-select-option.pipe';

const exportedComponents = [
  UiCheckboxComponent,
  UiControlWrapperComponent,
  UiFieldDisplayComponent,
  UiInputNumberComponent,
  UiInputTextComponent,
  UiInputTextareaComponent,
  UiInputWrapperComponent,
  UiSelectComponent,
  UiToSelectOptionPipe,
];

@NgModule({
  declarations: [...exportedComponents],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, UiIconModule, UiClickOutsideModule],
  exports: [...exportedComponents],
  providers: [
    {
      provide: UI_INPUT_VALIDATION_SUCCESS_ICON,
      useValue: 'fa-check-circle',
    },
    {
      provide: UI_INPUT_VALIDATION_ERROR_ICON,
      useValue: 'fa-exclamation-circle',
    },
    {
      provide: UI_INPUT_VALIDATION_PENDING_ICON,
      useValue: 'fa-spinner',
    },
    {
      provide: UI_SELECT_CLEAR_ICON,
      useValue: 'fa-times',
    },
    {
      provide: UI_SELECT_CARET_OPEN_ICON,
      useValue: 'fa-angle-up',
    },
    {
      provide: UI_SELECT_CARET_CLOSE_ICON,
      useValue: 'fa-angle-down',
    },
  ],
})
export class UiFormsModule {}
