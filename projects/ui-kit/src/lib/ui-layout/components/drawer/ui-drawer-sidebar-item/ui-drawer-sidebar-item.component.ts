import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[ui-drawer-sidebar-item]',
  templateUrl: './ui-drawer-sidebar-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDrawerSidebarItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
