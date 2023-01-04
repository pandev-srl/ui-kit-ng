import { Pipe, PipeTransform } from '@angular/core';
import { UiFormOption } from '../models';

@Pipe({
  name: 'uiToSelectOption',
})
export class UiToSelectOptionPipe implements PipeTransform {
  transform<T>(value: T[], mapFn: (el: T) => UiFormOption): UiFormOption[] {
    return value.map(mapFn);
  }
}
