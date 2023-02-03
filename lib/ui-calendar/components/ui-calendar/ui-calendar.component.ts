import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DateTime, WeekdayNumbers } from 'luxon';
import { CalendarEvent } from '../../models';

@Component({
  selector: 'ui-calendar',
  templateUrl: './ui-calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCalendarComponent {
  @Input() refDate = DateTime.now();
  @Output() refDateChange = new EventEmitter<DateTime>();

  @Input() initialWeekDay: WeekdayNumbers = 1;
  @Input() events: CalendarEvent[] = [];

  @Output() eventClicked = new EventEmitter<CalendarEvent>();
}
