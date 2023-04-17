import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { UiTheme } from '../../../models';

@Component({
  selector: 'ui-dialog-alert',
  templateUrl: './ui-dialog-alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDialogAlertComponent implements OnInit {
  @Input() theme: UiTheme = 'info';
  @Input() icon: string | null = null;
  @Input() showIcon = true;
  @Input() title: string | null = null;
  @Input() text: string | null = null;

  @Output() ok = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
