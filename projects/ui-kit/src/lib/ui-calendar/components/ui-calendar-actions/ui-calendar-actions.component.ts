import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ui-calendar-actions',
  templateUrl: './ui-calendar-actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCalendarActionsComponent {
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
