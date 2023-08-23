import { ChangeDetectionStrategy, Component, ContentChild, OnInit } from '@angular/core';
import { UiMobileHeaderLeftContentDirective } from '../../../directives/mobile/ui-mobile-header-left-content.directive';
import { UiMobileHeaderCenterContentDirective } from '../../../directives/mobile/ui-mobile-header-center-content.directive';
import { UiMobileHeaderRightContentDirective } from '../../../directives/mobile/ui-mobile-header-right-content.directive';

@Component({
  selector: 'ui-mobile-header',
  templateUrl: './ui-mobile-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMobileHeaderComponent implements OnInit {
  @ContentChild(UiMobileHeaderCenterContentDirective) centerContent: UiMobileHeaderCenterContentDirective | undefined;
  @ContentChild(UiMobileHeaderLeftContentDirective) leftContent: UiMobileHeaderCenterContentDirective | undefined;
  @ContentChild(UiMobileHeaderRightContentDirective) rightContent: UiMobileHeaderCenterContentDirective | undefined;

  constructor() {}

  ngOnInit(): void {}
}
