import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, OnInit } from '@angular/core';
import { UiDrawerTopNavbarComponent } from '../ui-drawer-top-navbar/ui-drawer-top-navbar.component';

@Component({
  selector: 'ui-drawer-content',
  templateUrl: './ui-drawer-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDrawerContentComponent implements OnInit {
  @ContentChild(UiDrawerTopNavbarComponent) topNavbar: UiDrawerTopNavbarComponent | undefined;

  constructor() {}

  ngOnInit(): void {}
}
