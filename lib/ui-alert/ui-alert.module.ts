import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiIconModule } from '../ui-icon';
import { UiAlertComponent } from './ui-alert/ui-alert.component';
import { UiHeadingModule } from '../ui-heading';

@NgModule({
  declarations: [UiAlertComponent],
  imports: [CommonModule, UiIconModule, UiHeadingModule],
  exports: [UiAlertComponent],
})
export class UiAlertModule {}
