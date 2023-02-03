import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DateTime, WeekdayNumbers } from 'luxon';
import { CalendarEvent } from '../../models';
import { BreakpointObserver } from '@angular/cdk/layout';
import { UiBreakpoints } from '../../../ui-layout';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'ui-calendar-monthly-view',
  templateUrl: './ui-calendar-monthly-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCalendarMonthlyViewComponent {
  @Input() refDate = DateTime.now();
  @Output() refDateChange = new EventEmitter<DateTime>();

  @Input() initialWeekDay: WeekdayNumbers = 1;
  @Input() events: CalendarEvent[] = [];

  @Output() eventClicked = new EventEmitter<CalendarEvent>();

  isMobile$: Observable<boolean>;
  isDesktop$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isMobile$ = this.breakpointObserver.observe(UiBreakpoints.mobile).pipe(map((res) => res.matches));
    this.isDesktop$ = this.breakpointObserver.observe(UiBreakpoints.desktop).pipe(map((res) => res.matches));
  }
}
