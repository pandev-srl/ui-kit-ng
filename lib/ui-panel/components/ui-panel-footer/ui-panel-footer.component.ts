import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-panel-footer',
  templateUrl: './ui-panel-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiPanelFooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
