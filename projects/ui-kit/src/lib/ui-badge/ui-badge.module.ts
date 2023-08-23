import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiIconModule } from '../ui-icon/ui-icon.module';
import { UiBadgeComponent } from './components/ui-badge/ui-badge.component';
import { UI_BADGE_LOADING_DEFAULT_ICON_SET, UI_BADGE_LOADING_ICON } from './models';

@NgModule({
  declarations: [UiBadgeComponent],
  imports: [CommonModule, UiIconModule],
  exports: [UiBadgeComponent],
  providers: [
    { provide: UI_BADGE_LOADING_DEFAULT_ICON_SET, useValue: null },
    { provide: UI_BADGE_LOADING_ICON, useValue: 'fa-spinner-third' },
  ],
})
export class UiBadgeModule {}
