import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-desktop-content',
  templateUrl: './ui-desktop-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDesktopContentComponent implements OnInit {
  @Input()
  @HostBinding('class.centered')
  centered = true;

  constructor() {}

  ngOnInit(): void {}
}
