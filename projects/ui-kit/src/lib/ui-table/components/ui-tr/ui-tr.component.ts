import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-tr',
  templateUrl: './ui-tr.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTrComponent {}
