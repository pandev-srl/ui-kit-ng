import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-docs-data-display',
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataDisplayComponent {}
