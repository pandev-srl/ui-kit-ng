import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { UiTheme } from '../../../models';
import { UI_DIALOG_ALERT_DEFAULT_ICONS } from '../../models/public-api';

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
