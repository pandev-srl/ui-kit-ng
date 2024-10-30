import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { uiHeadingSize } from '../../models';

@Component({
  selector: 'ui-docs-headings',
  templateUrl: './headings.component.html',
  styleUrls: ['./headings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadingsComponent implements OnInit {
  uiHeadingSize = uiHeadingSize;

  constructor() {}

  ngOnInit(): void {}
}
