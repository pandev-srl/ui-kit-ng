import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[ui-desktop-navbar-link]',
  templateUrl: './ui-desktop-navbar-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDesktopNavbarLinkComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
