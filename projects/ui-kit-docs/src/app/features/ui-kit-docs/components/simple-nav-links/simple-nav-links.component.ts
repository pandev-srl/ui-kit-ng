import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavLink, navLinks } from '../../models';

@Component({
  selector: 'ui-docs-simple-nav-links',
  templateUrl: './simple-nav-links.component.html',
  styleUrls: ['./simple-nav-links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleNavLinksComponent {
  navLinks: NavLink[] = navLinks;
}
