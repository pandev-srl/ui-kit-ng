import { InjectionToken } from '@angular/core';

export type UiInputTextType = 'email' | 'password' | 'tel' | 'text' | 'date' | 'time';

export const UI_INPUT_VALIDATION_SUCCESS_ICON = new InjectionToken<string>('UI_INPUT_VALIDATION_SUCCESS_ICON');
export const UI_INPUT_VALIDATION_ERROR_ICON = new InjectionToken<string>('UI_INPUT_VALIDATION_ERROR_ICON');
export const UI_INPUT_VALIDATION_PENDING_ICON = new InjectionToken<string>('UI_INPUT_VALIDATION_PENDING_ICON');
export const UI_SELECT_CLEAR_ICON = new InjectionToken<string>('UI_SELECT_CLEAR_ICON');
export const UI_SELECT_CARET_OPEN_ICON = new InjectionToken<string>('UI_SELECT_CARET_OPEN_ICON');
export const UI_SELECT_CARET_CLOSE_ICON = new InjectionToken<string>('UI_SELECT_CARET_CLOSE_ICON');

export interface UiFormOption {
  label: string;
  value: any;
}
