import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-docs-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
