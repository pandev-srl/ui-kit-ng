import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiDialogComponent } from './components/ui-dialog/ui-dialog.component';
import { UiDialogConfirmComponent } from './components/ui-dialog-confirm/ui-dialog-confirm.component';
import { UiDialogAlertComponent } from './components/ui-dialog-alert/ui-dialog-alert.component';
import { UiPanelModule } from '../ui-panel';
import { UiIconModule } from '../ui-icon';
import { UiButtonModule } from '../ui-button';
import { UI_DIALOG_ALERT_DEFAULT_ICONS } from './models/public-api';
import { UiDialogThemeToIconPipe } from './pipes/ui-dialog-theme-to-icon.pipe';
import { UiDialogService } from './services/ui-dialog.service';

const exportedComponents = [UiDialogComponent];

@NgModule({
  declarations: [...exportedComponents, UiDialogConfirmComponent, UiDialogAlertComponent, UiDialogThemeToIconPipe],
  imports: [CommonModule, UiPanelModule, UiIconModule, UiButtonModule],
  exports: [...exportedComponents],
  providers: [
    UiDialogService,
    {
      provide: UI_DIALOG_ALERT_DEFAULT_ICONS,
      useValue: {
        primary: {
          iconName: 'fa-circle-info',
        },
        secondary: {
          iconName: 'fa-circle-info',
        },
        accent: {
          iconName: 'fa-circle-info',
        },
        danger: {
          iconName: 'fa-circle-exclamation',
        },
        success: {
          iconName: 'fa-circle-check',
        },
        warning: {
          iconName: 'fa-triangle-exclamation',
        },
        info: {
          iconName: 'fa-circle-info',
        },
      },
    },
  ],
})
export class UiDialogModule {}
