import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
  @Input() loading = false;

  @Output() eventClicked = new EventEmitter<CalendarEvent>();

  constructor() {
    this.refDateChange.pipe(takeUntilDestroyed()).subscribe((val) => {
      console.log(val);
      this.refDate = val;
    });
  }
}
