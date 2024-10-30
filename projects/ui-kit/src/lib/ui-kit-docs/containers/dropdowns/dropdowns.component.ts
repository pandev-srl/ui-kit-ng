import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-docs-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
