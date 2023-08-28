import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-td',
  templateUrl: './ui-td.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTdComponent {}
