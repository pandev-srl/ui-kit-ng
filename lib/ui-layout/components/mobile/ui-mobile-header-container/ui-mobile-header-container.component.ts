import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-mobile-header-container',
  templateUrl: './ui-mobile-header-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMobileHeaderContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
