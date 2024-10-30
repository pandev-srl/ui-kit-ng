import { ChangeDetectionStrategy, Component } from '@angular/core';
import { uiThemes } from '../../models';

@Component({
  selector: 'ui-docs-action-messages',
  templateUrl: './action-messages.component.html',
  styleUrls: ['./action-messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionMessagesComponent {
  uiThemes = uiThemes;

  messages = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ' Cras eu ligula vitae ligula ultricies accumsan.',
    'Phasellus euismod turpis sit amet tellus volutpat, quis posuere mi fringilla.',
    'Nunc non turpis non justo euismod pharetra in eu justo.',
  ];
}
