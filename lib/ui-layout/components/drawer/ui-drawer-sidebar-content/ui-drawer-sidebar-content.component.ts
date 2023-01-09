import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-drawer-sidebar-content',
  templateUrl: './ui-drawer-sidebar-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDrawerSidebarContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
