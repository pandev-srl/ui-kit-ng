import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-mobile-content',
  templateUrl: './ui-mobile-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMobileContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
