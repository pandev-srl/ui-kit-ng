import { ChangeDetectionStrategy, Component, ContentChild, HostBinding, Input, OnInit } from '@angular/core';
import { UiDesktopHeaderLeftContentDirective } from '../../../directives/desktop/ui-desktop-header-left-content.directive';
import { UiDesktopHeaderCenterContentDirective } from '../../../directives/desktop/ui-desktop-header-center-content.directive';
import { UiDesktopHeaderRightContentDirective } from '../../../directives/desktop/ui-desktop-header-right-content.directive';

@Component({
  selector: 'ui-desktop-header',
  templateUrl: './ui-desktop-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDesktopHeaderComponent implements OnInit {
  @ContentChild(UiDesktopHeaderCenterContentDirective) centerContent: UiDesktopHeaderCenterContentDirective | undefined;
  @ContentChild(UiDesktopHeaderLeftContentDirective) leftContent: UiDesktopHeaderCenterContentDirective | undefined;
  @ContentChild(UiDesktopHeaderRightContentDirective) rightContent: UiDesktopHeaderCenterContentDirective | undefined;

  @Input()
  @HostBinding('class.centered')
  centered = true;

  constructor() {}

  ngOnInit(): void {}
}
