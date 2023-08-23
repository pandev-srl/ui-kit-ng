import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-docs-desktop-layout',
  templateUrl: './desktop-layout.component.html',
  styleUrls: ['./desktop-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesktopLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
