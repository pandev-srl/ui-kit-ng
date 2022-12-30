import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

export const UI_INPUT_ERRORS_MAP = new InjectionToken<{ [key: string]: string }>('UI_INPUT_ERRORS_MAP');

@Injectable({
  providedIn: 'root',
})
export class UiInputErrorsService {
  private readonly _errorsMap: { [key: string]: string } = {
    required: 'Non puà essere lasciato vuoto',
    maxlength: 'Deve essere più corto',
    minlength: 'Deve essere più lungo',
    email: 'Formato email non valido',
    emailNotUnique: 'Esiste già un utente registrato con questa email',
    usernameNotUnique: 'Esiste già un utente registrato con questo username',
    invalid: 'Non valido',
    passwordPattern:
      'La password deve contenere lettere maiuscole, minuscole, almeno un numero e almeno uno tra questi caratteri: !@#$%^&*()-',
    confirmPasswordMismatch: 'Non coincide con la password inserita',
  };

  get errorsMap(): { [key: string]: string } {
    return this._errorsMap;
  }

  constructor(@Optional() @Inject(UI_INPUT_ERRORS_MAP) customErrors: { [key: string]: string }) {
    this._errorsMap = Object.assign(this._errorsMap, customErrors);
  }
}
