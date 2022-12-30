import { UiDialogOptions, UiDialogRef } from './';
import { InjectionToken } from '@angular/core';
import { UiTheme } from '../../models';

export { UiDialogOptions, UiDialogRef };

export type UiDialogDefaultIconsMap = { [key in UiTheme]: { iconSet?: string; iconName: string } };

export const UI_DIALOG_ALERT_DEFAULT_ICONS = new InjectionToken<UiDialogDefaultIconsMap>('UI_DIALOG_ALERT_ICONS');
