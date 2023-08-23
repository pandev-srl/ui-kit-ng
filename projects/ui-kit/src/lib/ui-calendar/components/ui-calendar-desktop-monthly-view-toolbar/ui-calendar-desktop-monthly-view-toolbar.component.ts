import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'ui-calendar-desktop-monthly-view-toolbar',
  templateUrl: './ui-calendar-desktop-monthly-view-toolbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCalendarDesktopMonthlyViewToolbarComponent {
  @Input() refDate = DateTime.now();
  @Output() refDateChange = new EventEmitter<DateTime>();

  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
  @Output() today = new EventEmitter<void>();

  onNext(): void {
    this.next.emit();
  }

  onPrevious(): void {
    this.previous.emit();
  }

  onToday(): void {
    this.today.emit();
  }
}
