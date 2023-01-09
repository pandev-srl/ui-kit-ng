import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiIconModule } from '../ui-icon';
import {
  UiDesktopContentComponent,
  UiDesktopContentContainerComponent,
  UiDesktopHeaderComponent,
  UiDesktopHeaderContainerComponent,
  UiDesktopNavbarComponent,
  UiDesktopNavbarLinkComponent,
} from './components/desktop';
import {
  UiMobileContentComponent,
  UiMobileHeaderComponent,
  UiMobileHeaderContainerComponent,
  UiMobileNavbarComponent,
  UiMobileNavbarContainerComponent,
  UiMobileNavbarLinkComponent,
} from './components/mobile';
import {
  UiDesktopHeaderCenterContentDirective,
  UiDesktopHeaderLeftContentDirective,
  UiDesktopHeaderRightContentDirective,
} from './directives/desktop';
import {
  UiMobileHeaderCenterContentDirective,
  UiMobileHeaderLeftContentDirective,
  UiMobileHeaderRightContentDirective,
} from './directives/mobile';
import {
  UiDrawerContentComponent,
  UiDrawerSidebarComponent,
  UiDrawerSidebarContentComponent,
  UiDrawerSidebarHeaderComponent,
  UiDrawerSidebarItemComponent,
  UiDrawerTopNavbarComponent,
  UiDrawerTopNavbarLinkComponent,
} from './components/drawer';

const exportedComponents = [
  UiDesktopContentComponent,
  UiDesktopContentContainerComponent,
  UiDesktopHeaderComponent,
  UiDesktopHeaderContainerComponent,
  UiDesktopNavbarComponent,
  UiDesktopNavbarLinkComponent,
  UiDesktopHeaderLeftContentDirective,
  UiDesktopHeaderCenterContentDirective,
  UiDesktopHeaderRightContentDirective,

  UiMobileContentComponent,
  UiMobileHeaderComponent,
  UiMobileHeaderContainerComponent,
  UiMobileNavbarComponent,
  UiMobileNavbarContainerComponent,
  UiMobileNavbarLinkComponent,
  UiMobileHeaderLeftContentDirective,
  UiMobileHeaderCenterContentDirective,
  UiMobileHeaderRightContentDirective,

  UiDrawerSidebarComponent,
  UiDrawerContentComponent,
  UiDrawerSidebarHeaderComponent,
  UiDrawerSidebarContentComponent,
  UiDrawerSidebarItemComponent,
  UiDrawerTopNavbarComponent,
  UiDrawerTopNavbarLinkComponent,
];

@NgModule({
  declarations: [...exportedComponents],
  imports: [CommonModule, UiIconModule],
  exports: [...exportedComponents],
})
export class UiLayoutModule {}
