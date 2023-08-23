import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[ui-mobile-navbar-link]',
  templateUrl: './ui-mobile-navbar-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMobileNavbarLinkComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
