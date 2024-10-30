import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';
import { UiBreakpoints } from '../../../ui-layout';

@Component({
  selector: 'ui-docs-root-layout',
  templateUrl: './root-layout.component.html',
  styleUrls: ['./root-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RootLayoutComponent implements OnInit {
  isMobile$: Observable<boolean>;
  isDesktop$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isMobile$ = this.breakpointObserver.observe(UiBreakpoints.mobile).pipe(map((res) => res.matches));
    this.isDesktop$ = this.breakpointObserver.observe(UiBreakpoints.desktop).pipe(map((res) => res.matches));
  }

  ngOnInit(): void {}
}
