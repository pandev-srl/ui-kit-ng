import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UiTheme } from '../../../models';

@Component({
  selector: 'ui-dialog-confirm',
  templateUrl: './ui-dialog-confirm.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDialogConfirmComponent implements OnInit {
  @Input() theme: UiTheme = 'info';
  @Input() icon: string | null = null;
  @Input() showIcon = true;
  @Input() title: string | null = null;
  @Input() text: string | null = null;

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
