import { InjectionToken } from '@angular/core';

export type UiButtonSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type UiButtonStyle = 'solid' | 'outline' | 'inline';

export const UI_BUTTON_DEFAULT_SPINNER_ICON = new InjectionToken<string>('UI_BUTTON_DEFAULT_SPINNER_ICON');
