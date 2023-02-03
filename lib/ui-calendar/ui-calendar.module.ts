import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCalendarComponent } from './components/ui-calendar/ui-calendar.component';
import { UiCalendarMonthlyViewComponent } from './components/ui-calendar-monthly-view/ui-calendar-monthly-view.component';
import { UiCalendarDesktopMonthlyViewComponent } from './components/ui-calendar-desktop-monthly-view/ui-calendar-desktop-monthly-view.component';
import { UiCalendarMobileMonthlyViewComponent } from './components/ui-calendar-mobile-monthly-view/ui-calendar-mobile-monthly-view.component';
import { UiButtonModule } from '../ui-button';
import { UiIconModule } from '../ui-icon';
import { UiCalendarActionsComponent } from './components/ui-calendar-actions/ui-calendar-actions.component';
import { UiHeadingModule } from '../ui-heading';
import { UiCalendarDesktopMonthlyViewToolbarComponent } from './components/ui-calendar-desktop-monthly-view-toolbar/ui-calendar-desktop-monthly-view-toolbar.component';

const exported = [
  UiCalendarComponent,
  UiCalendarMonthlyViewComponent,
  UiCalendarDesktopMonthlyViewComponent,
  UiCalendarMobileMonthlyViewComponent,
  UiCalendarDesktopMonthlyViewToolbarComponent,
];

@NgModule({
  declarations: [...exported, UiCalendarActionsComponent],
  imports: [CommonModule, UiButtonModule, UiIconModule, UiHeadingModule],
  exports: [...exported],
})
export class UiCalendarModule {}
