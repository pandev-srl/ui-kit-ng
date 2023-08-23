import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-panel-header',
  templateUrl: './ui-panel-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiPanelHeaderComponent implements OnInit {
  @Input()
  @HostBinding('class.is-padded')
  padded = true;

  constructor() {}

  ngOnInit(): void {}
}
