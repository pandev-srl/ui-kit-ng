import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-tbody',
  templateUrl: './ui-tbody.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTbodyComponent {}
