import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiIconDirective } from './directives/ui-icon.directive';
import { UI_DEFAULT_ICON_SET } from './models';

@NgModule({
  declarations: [UiIconDirective],
  imports: [CommonModule],
  exports: [UiIconDirective],
  providers: [
    {
      provide: UI_DEFAULT_ICON_SET,
      useValue: 'fa-regular',
    },
  ],
})
export class UiIconModule {}
