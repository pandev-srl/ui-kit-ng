import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavLink, navLinks } from '../../models';

@Component({
  selector: 'ui-docs-drawer-root-layout',
  templateUrl: './drawer-root-layout.component.html',
  styleUrls: ['./drawer-root-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerRootLayoutComponent {
  protected readonly navLinks: NavLink[] = navLinks;
}
