import { DateTime, Info } from 'luxon';
import { DayOfMonth } from '../models';

export class CalendarUtils {
  static buildDaysOfWeek(initialWeekDay: number): string[] {
    const result: string[] = [];
    const luxonWeekdays = Info.weekdaysFormat('short');

    luxonWeekdays.forEach((_el, i) => {
      result.push(luxonWeekdays[Math.abs(initialWeekDay - 1 - i) % luxonWeekdays.length]);
    });

    return result;
  }

  static buildDaysOfMonth(
    referenceDay: DateTime,
    initialDayOfMonth: number,
  ): { list: DayOfMonth[]; matrix: DayOfMonth[][] } {
    const today = DateTime.now();
    const daysOfMonth: DayOfMonth[] = [];
    const daysOfMonthMatrix: DayOfMonth[][] = [];

    const startOfMonth = referenceDay.startOf('month');
    const endOfMonth = referenceDay.endOf('month');

    for (let i = startOfMonth.weekday - initialDayOfMonth; i > 0; i--) {
      const dateTime = startOfMonth.minus({ day: i });

      daysOfMonth.push({
        dateTime,
        isInPreviousMonth: true,
        isInNextMonth: false,
        isToday: dateTime.toSQLDate() === today.toSQLDate(),
      });
    }

    for (let i = 0; i < endOfMonth.day; i++) {
      const dateTime = startOfMonth.plus({ day: i });

      daysOfMonth.push({
        dateTime,
        isInPreviousMonth: false,
        isInNextMonth: false,
        isToday: dateTime.toSQLDate() === today.toSQLDate(),
      });
    }

    const missingDays = daysOfMonth.length % 7 == 0 ? 0 : 7 - (daysOfMonth.length % 7);
    for (let i = 0; i < missingDays; i++) {
      const dateTime = endOfMonth.plus({ day: i + 1 });

      daysOfMonth.push({
        dateTime,
        isInPreviousMonth: false,
        isInNextMonth: true,
        isToday: dateTime.toSQLDate() === today.toSQLDate(),
      });
    }

    let currentRow: DayOfMonth[] = [];
    for (let i = 0; i < daysOfMonth.length; i++) {
      if (i % 7 === 0) {
        currentRow = [];
        daysOfMonthMatrix.push(currentRow);
      }

      currentRow.push(daysOfMonth[i]);
    }

    return {
      list: daysOfMonth,
      matrix: daysOfMonthMatrix,
    };
  }

  static rangeOfEvents(currentDay: DateTime = DateTime.now()): { startDateTime: DateTime; endDateTime: DateTime } {
    const startDateTime = currentDay.startOf('month').startOf('week');
    const endDateTime = currentDay.endOf('month').endOf('week');

    return {
      startDateTime,
      endDateTime,
    };
  }
}
