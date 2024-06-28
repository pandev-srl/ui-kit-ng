import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-data-display-item',
  templateUrl: './ui-data-display-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDataDisplayItemComponent {}
