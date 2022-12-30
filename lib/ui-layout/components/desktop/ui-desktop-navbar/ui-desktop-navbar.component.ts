import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-desktop-navbar',
  templateUrl: './ui-desktop-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDesktopNavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
