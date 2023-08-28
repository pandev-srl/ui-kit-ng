import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-table-container',
  templateUrl: './ui-table-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTableContainerComponent {}
