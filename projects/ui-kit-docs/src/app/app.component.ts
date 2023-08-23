import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-docs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
