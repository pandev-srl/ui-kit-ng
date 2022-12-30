import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-desktop-header-container',
  templateUrl: './ui-desktop-header-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDesktopHeaderContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
