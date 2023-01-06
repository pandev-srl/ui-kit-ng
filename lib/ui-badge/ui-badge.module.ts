import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiIconModule } from '../ui-icon/ui-icon.module';
import { UiBadgeComponent } from './ui-badge/ui-badge.component';

@NgModule({
  declarations: [UiBadgeComponent],
  imports: [CommonModule, UiIconModule],
  exports: [UiBadgeComponent],
})
export class UiBadgeModule {}
