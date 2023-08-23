import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-drawer-sidebar',
  templateUrl: './ui-drawer-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDrawerSidebarComponent implements OnInit {
  @Input()
  @HostBinding('class.opened')
  opened = false;

  constructor() {}

  ngOnInit(): void {}
}
