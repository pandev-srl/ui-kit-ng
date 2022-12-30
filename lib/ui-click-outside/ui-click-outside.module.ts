import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiClickOutsideDirective } from './directives/ui-click-outside.directive';

@NgModule({
  declarations: [UiClickOutsideDirective],
  imports: [CommonModule],
  exports: [UiClickOutsideDirective],
})
export class UiClickOutsideModule {}
