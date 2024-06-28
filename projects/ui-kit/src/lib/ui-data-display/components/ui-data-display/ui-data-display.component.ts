import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { UiDataDisplayView } from '../../models';

@Component({
  selector: 'ui-data-display',
  templateUrl: './ui-data-display.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDataDisplayComponent {
  @Input() view: UiDataDisplayView = 'left-aligned';
  @Input() @HostBinding('class.condensed') condensed = false;
}
