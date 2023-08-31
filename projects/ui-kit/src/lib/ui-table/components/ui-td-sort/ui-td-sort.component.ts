import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { UiSortOrder } from '../../../models';

@Component({
  selector: 'ui-td-sort',
  templateUrl: './ui-td-sort.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTdSortComponent {
  @Input() containerClasses = 'flex justify-start w-full';
  @Input() contentClasses = '';
  @Input() sortLinkClasses = '';

  @Input() order: UiSortOrder = null;
  @Output() orderChange = new EventEmitter<UiSortOrder>();

  onOrderChange(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    switch (this.order) {
      case 'asc':
        this.order = 'desc';
        this.orderChange.emit('desc');
        break;
      case 'desc':
        this.order = null;
        this.orderChange.emit(null);
        break;
      default:
        this.order = 'asc';
        this.orderChange.emit('asc');
    }
  }
}
