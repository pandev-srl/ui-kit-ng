import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-docs-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablesComponent {}
