import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { uiButtonSize, uiButtonStyles, uiThemes } from '../../models';

@Component({
  selector: 'ui-docs-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsComponent implements OnInit {
  uiThemes = uiThemes;
  uiButtonStyles = uiButtonStyles;
  uiButtonSize = uiButtonSize;

  constructor() {}

  ngOnInit(): void {
    console.log('Init content');
  }
}
