import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMonthChooserComponent } from './ui-month-chooser/ui-month-chooser.component';
import { UiHeadingModule } from '../ui-heading';
import { UiIconModule } from '../ui-icon';
import { DateTimePipesModule } from '@/shared';

@NgModule({
  declarations: [UiMonthChooserComponent],
  imports: [CommonModule, UiHeadingModule, DateTimePipesModule, UiIconModule],
  exports: [UiMonthChooserComponent],
})
export class UiMonthChooserModule {}
