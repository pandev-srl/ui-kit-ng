import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-docs-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {}
