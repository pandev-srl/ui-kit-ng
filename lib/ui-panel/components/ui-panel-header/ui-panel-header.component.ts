import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-panel-header',
  templateUrl: './ui-panel-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiPanelHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
