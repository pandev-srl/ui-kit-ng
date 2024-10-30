import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { uiThemes } from '../../models';

@Component({
  selector: 'ui-docs-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertsComponent implements OnInit {
  uiThemes = uiThemes;

  constructor() {}

  ngOnInit(): void {}
}
