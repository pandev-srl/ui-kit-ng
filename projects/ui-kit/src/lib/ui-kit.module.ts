import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiLayoutModule } from './ui-layout/';
import { UiIconModule } from './ui-icon';
import { UiDropdownModule } from './ui-dropdown';
import { UiClickOutsideModule } from './ui-click-outside';
import { UiButtonModule } from './ui-button';
import { UiHeadingModule } from './ui-heading';
import { UiLoadingModule } from './ui-loading';
import { UiPanelModule } from './ui-panel';
import { UiAlertModule } from './ui-alert';
import { UiFormsModule } from './ui-forms';
import { UiDialogModule } from './ui-dialog';
import { UiActionMessagesComponent } from './ui-action-messages';
import { UiBadgeModule } from './ui-badge';
import { UiCalendarModule } from './ui-calendar';

export const exportedModules = [
  UiActionMessagesComponent,
  UiAlertModule,
  UiBadgeModule,
  UiButtonModule,
  UiCalendarModule,
  UiClickOutsideModule,
  UiDialogModule,
  UiDropdownModule,
  UiFormsModule,
  UiHeadingModule,
  UiIconModule,
  UiLayoutModule,
  UiLoadingModule,
  UiPanelModule,
];

@NgModule({
  imports: [CommonModule, ...exportedModules],
  exports: [...exportedModules],
})
export class UiKitModule {}
