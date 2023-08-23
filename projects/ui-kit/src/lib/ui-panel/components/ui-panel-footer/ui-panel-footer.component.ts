import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-panel-footer',
  templateUrl: './ui-panel-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiPanelFooterComponent implements OnInit {
  @Input()
  @HostBinding('class.is-padded')
  padded = true;

  constructor() {}

  ngOnInit(): void {}
}
