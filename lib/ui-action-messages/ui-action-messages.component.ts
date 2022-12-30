import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UiAlertModule } from '../ui-alert';
import { UiTheme } from '../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-action-messages',
  templateUrl: './ui-action-messages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, UiAlertModule],
  standalone: true,
})
export class UiActionMessagesComponent {
  @Input() theme: UiTheme = 'danger';
  @Input() messages: string[] = [];
}
