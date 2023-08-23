import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-drawer-top-navbar',
  templateUrl: './ui-drawer-top-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDrawerTopNavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
