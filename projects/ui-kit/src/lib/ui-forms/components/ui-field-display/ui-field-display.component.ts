import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ui-field-display',
  templateUrl: './ui-field-display.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiFieldDisplayComponent {
  @Input() id?: string;
  @Input() label: string | null = null;
  @Input() hint: string | null = null;
  @Input() value: string | null = null;
}
