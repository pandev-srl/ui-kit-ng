import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-thead',
  templateUrl: './ui-thead.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTheadComponent {}
