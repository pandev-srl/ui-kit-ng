import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[ui-drawer-top-navbar-link]',
  templateUrl: './ui-drawer-top-navbar-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDrawerTopNavbarLinkComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
