import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiIconModule } from '../ui-icon';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { UI_BUTTON_DEFAULT_SPINNER_ICON } from './models';

@NgModule({
  declarations: [UiButtonComponent],
  exports: [UiButtonComponent],
  imports: [CommonModule, UiIconModule],
  providers: [
    {
      provide: UI_BUTTON_DEFAULT_SPINNER_ICON,
      useValue: 'fa-spinner-third fa-spin',
    },
  ],
})
export class UiButtonModule {}
