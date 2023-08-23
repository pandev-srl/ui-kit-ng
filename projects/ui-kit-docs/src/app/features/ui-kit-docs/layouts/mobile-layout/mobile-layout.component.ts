import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { navLinks } from '../../models';

@Component({
  selector: 'ui-docs-mobile-layout',
  templateUrl: './mobile-layout.component.html',
  styleUrls: ['./mobile-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  protected readonly navLinks = navLinks;
}
