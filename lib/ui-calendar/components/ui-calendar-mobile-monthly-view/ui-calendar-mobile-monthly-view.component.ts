import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DateTime, WeekdayNumbers } from 'luxon';
import { CalendarEvent } from '@/ui-kit';

@Component({
  selector: 'ui-calendar-mobile-monthly-view',
  templateUrl: './ui-calendar-mobile-monthly-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCalendarMobileMonthlyViewComponent {
  @Input() refDate = DateTime.now();
  @Output() refDateChange = new EventEmitter<DateTime>();

  @Input() initialWeekDay: WeekdayNumbers = 1;
  @Input() events: CalendarEvent[] = [];

  @Output() eventClicked = new EventEmitter<CalendarEvent>();
}
