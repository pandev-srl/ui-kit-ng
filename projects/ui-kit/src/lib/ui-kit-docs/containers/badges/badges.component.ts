import { ChangeDetectionStrategy, Component } from '@angular/core';
import { uiThemes } from '../../models';

@Component({
  selector: 'ui-docs-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgesComponent {
  uiThemes = uiThemes;
}
