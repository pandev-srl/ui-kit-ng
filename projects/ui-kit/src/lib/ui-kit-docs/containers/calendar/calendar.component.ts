import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'ui-docs-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
  refDate: DateTime = DateTime.now();
}
