import { DateTime } from 'luxon';

export type CalendarView = 'month';

export interface CalendarEvent {
  type: any;
  data: any;
  startDateTime: DateTime;
  endDateTime: DateTime;
  allDay: boolean;
  description: string;
  color: {
    dark: CalendarEventColor;
    light: CalendarEventColor;
  };
}

export interface EventByDate {
  event: CalendarEvent;
  numberOfDays: number;
}

export interface EventToPrint {
  event: CalendarEvent;
  numberOfDays: number;
  cellsToCover: number;
}

export interface CalendarEventColor {
  twClass?: string;
}

export interface DayOfMonth {
  dateTime: DateTime;
  isInPreviousMonth: boolean;
  isToday: boolean;
  isInNextMonth: boolean;
}

export interface RangeOfEvents {
  startDateTime: DateTime;
  endDateTime: DateTime;
}
