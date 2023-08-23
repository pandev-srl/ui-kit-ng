import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLoadingComponent } from './components/ui-loading/ui-loading.component';
import { UiHeadingModule } from '../ui-heading';
import { UiIconModule } from '../ui-icon';
import { UI_LOADING_DEFAULT_ICON_SET, UI_LOADING_ICON } from './models';

@NgModule({
  declarations: [UiLoadingComponent],
  imports: [CommonModule, UiHeadingModule, UiIconModule],
  exports: [UiLoadingComponent],
  providers: [
    { provide: UI_LOADING_DEFAULT_ICON_SET, useValue: null },
    { provide: UI_LOADING_ICON, useValue: 'fa-spinner-third' },
  ],
})
export class UiLoadingModule {}
