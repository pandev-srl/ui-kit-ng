import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-table',
  templateUrl: './ui-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTableComponent {}
