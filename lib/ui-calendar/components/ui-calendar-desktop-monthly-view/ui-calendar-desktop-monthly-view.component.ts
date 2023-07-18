import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DateTime, WeekdayNumbers } from 'luxon';
import { CalendarEvent, CalendarUtils, DayOfMonth, EventByDate, EventToPrint } from '@/ui-kit';

@Component({
  selector: 'ui-calendar-desktop-monthly-view',
  templateUrl: './ui-calendar-desktop-monthly-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCalendarDesktopMonthlyViewComponent implements OnInit, OnChanges {
  @Input() refDate = DateTime.now();
  @Output() refDateChange = new EventEmitter<DateTime>();

  @Input() initialWeekDay: WeekdayNumbers = 1;
  @Input() events: CalendarEvent[] = [];

  @Input() loading = false;

  @Output() eventClicked = new EventEmitter<CalendarEvent>();

  constructor(private cdr: ChangeDetectorRef) {}

  firstInitWeekDays = false;
  firstInitDaysOfMonth = false;
  firstInitEvents = false;

  weekDays: string[] = [];
  daysOfMonth: DayOfMonth[] = [];
  daysOfMonthMatrix: DayOfMonth[][] = [];
  eventsByDate: { [key: string]: (EventByDate | undefined)[] } = {};
  eventsByDateToPrint: (EventToPrint | undefined)[][][] = [];

  ngOnInit(): void {
    if (!this.firstInitWeekDays) {
      this.initWeekDays();
    }
    if (!this.firstInitDaysOfMonth) {
      this.initDaysOfMonth();
    }
    if (!this.firstInitEvents) {
      this.initEvents();
    }
  }

  ngOnChanges(_changes: SimpleChanges): void {
    this.initDaysOfMonth();
    this.initWeekDays();
    this.initEvents();

    this.cdr.markForCheck();
  }

  onNext(): void {
    this.refDate = this.refDate.plus({ month: 1 });
    this.refDateChange.emit(this.refDate);
  }

  onPrevious(): void {
    this.refDate = this.refDate.minus({ month: 1 });
    this.refDateChange.emit(this.refDate);
  }

  onToday(): void {
    this.refDate = DateTime.now();
    this.refDateChange.emit(this.refDate);
  }

  private initWeekDays(): void {
    this.firstInitWeekDays = true;

    this.weekDays = CalendarUtils.buildDaysOfWeek(this.initialWeekDay);
  }

  private initDaysOfMonth(): void {
    this.firstInitDaysOfMonth = true;

    const daysOfMonth = CalendarUtils.buildDaysOfMonth(this.refDate, this.initialWeekDay);

    this.daysOfMonth = daysOfMonth.list;
    this.daysOfMonthMatrix = daysOfMonth.matrix;
  }

  private initEvents(): void {
    this.firstInitEvents = true;

    this.eventsByDate = {};
    this.eventsByDateToPrint = [];

    const events = [...this.events].sort((el1, el2) => (el1.startDateTime >= el2.startDateTime ? 1 : -1));

    events.forEach((event) => {
      const startDate = event.startDateTime.startOf('day');
      const endDate = event.endDateTime.startOf('day');

      const numberOfDays = endDate.diff(startDate, 'days').days + 1;

      let firstAvailablePlace: number | null = null;
      for (let i = 0; i < numberOfDays; i++) {
        const currentDate = startDate.plus({ day: i });

        if (!this.eventsByDate[currentDate.toSQLDate()]) {
          this.eventsByDate[currentDate.toSQLDate()] = [];
        }

        if (firstAvailablePlace == null) {
          for (let j = 0; j < this.eventsByDate[currentDate.toSQLDate()].length && firstAvailablePlace == null; j++) {
            if (this.eventsByDate[currentDate.toSQLDate()][j] === undefined) {
              firstAvailablePlace = j;
            }
          }

          if (firstAvailablePlace === null) {
            firstAvailablePlace = this.eventsByDate[currentDate.toSQLDate()].length;
          }
        }

        this.eventsByDate[currentDate.toSQLDate()][firstAvailablePlace] = {
          event,
          numberOfDays,
        };
      }
    });

    for (let i = 0; i < this.daysOfMonthMatrix.length; i++) {
      if (!this.eventsByDateToPrint[i]) {
        this.eventsByDateToPrint[i] = [];
      }

      for (let j = 0; j < this.daysOfMonthMatrix[i].length; j++) {
        const dayOfMonth = this.daysOfMonthMatrix[i][j];
        const eventsOfDayOfMonth = this.eventsByDate[dayOfMonth.dateTime.toSQLDate()];

        if (!this.eventsByDateToPrint[i][j]) {
          this.eventsByDateToPrint[i][j] = [];
        }

        if (eventsOfDayOfMonth) {
          for (let k = 0; k < eventsOfDayOfMonth.length; k++) {
            const event = eventsOfDayOfMonth[k];

            if (!event) {
              this.eventsByDateToPrint[i][j].push(undefined);
            } else {
              let cellsToCover: number;

              if (event.event.startDateTime.startOf('day').equals(dayOfMonth.dateTime.startOf('day'))) {
                cellsToCover = event.numberOfDays >= 7 - j ? 7 - j : event.numberOfDays;
              } else {
                if (j == 0) {
                  const remainingNumberOfDays = event.event.endDateTime
                    .startOf('day')
                    .diff(dayOfMonth.dateTime.startOf('day'), 'days').days;
                  cellsToCover = remainingNumberOfDays >= 7 - j ? 7 - j : remainingNumberOfDays + 1;
                } else {
                  cellsToCover = 0;
                }
              }

              this.eventsByDateToPrint[i][j].push({
                ...event,
                cellsToCover,
              });
            }
          }
        }
      }
    }
  }
}
