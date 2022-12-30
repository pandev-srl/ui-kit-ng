import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-panel-body',
  templateUrl: './ui-panel-body.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiPanelBodyComponent implements OnInit {
  @Input()
  @HostBinding('class.without-header')
  withoutHeader = false;

  @Input()
  @HostBinding('class.without-footer')
  withoutFooter = false;

  @Input()
  @HostBinding('class.is-padded')
  padded = true;

  constructor() {}

  ngOnInit(): void {}
}
