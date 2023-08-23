import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-mobile-navbar',
  templateUrl: './ui-mobile-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMobileNavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
