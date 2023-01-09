import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-drawer-sidebar-header',
  templateUrl: './ui-drawer-sidebar-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDrawerSidebarHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
