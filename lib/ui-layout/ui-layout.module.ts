import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiIconModule } from '../ui-icon';
import { UiMobileNavbarComponent } from './components/mobile/ui-mobile-navbar/ui-mobile-navbar.component';
import { UiMobileNavbarContainerComponent } from './components/mobile/ui-mobile-navbar-container/ui-mobile-navbar-container.component';
import { UiMobileContentComponent } from './components/mobile/ui-mobile-content/ui-mobile-content.component';
import { UiMobileNavbarLinkComponent } from './components/mobile/ui-mobile-navbar-link/ui-mobile-navbar-link.component';
import { UiMobileHeaderComponent } from './components/mobile/ui-mobile-header/ui-mobile-header.component';
import { UiMobileHeaderContainerComponent } from './components/mobile/ui-mobile-header-container/ui-mobile-header-container.component';
import { UiMobileHeaderLeftContentDirective } from './directives/mobile/ui-mobile-header-left-content.directive';
import { UiMobileHeaderCenterContentDirective } from './directives/mobile/ui-mobile-header-center-content.directive';
import { UiMobileHeaderRightContentDirective } from './directives/mobile/ui-mobile-header-right-content.directive';
import { UiDesktopHeaderComponent } from './components/desktop/ui-desktop-header/ui-desktop-header.component';
import { UiDesktopContentComponent } from './components/desktop/ui-desktop-content/ui-desktop-content.component';
import { UiDesktopHeaderContainerComponent } from './components/desktop/ui-desktop-header-container/ui-desktop-header-container.component';
import { UiDesktopHeaderLeftContentDirective } from './directives/desktop/ui-desktop-header-left-content.directive';
import { UiDesktopHeaderCenterContentDirective } from './directives/desktop/ui-desktop-header-center-content.directive';
import { UiDesktopHeaderRightContentDirective } from './directives/desktop/ui-desktop-header-right-content.directive';
import { UiDesktopNavbarComponent } from './components/desktop/ui-desktop-navbar/ui-desktop-navbar.component';
import { UiDesktopNavbarLinkComponent } from './components/desktop/ui-desktop-navbar-link/ui-desktop-navbar-link.component';
import { UiDesktopContentContainerComponent } from './components/desktop/ui-desktop-content-container/ui-desktop-content-container.component';

const exportedComponents = [
  UiDesktopContentComponent,
  UiDesktopContentContainerComponent,
  UiDesktopHeaderComponent,
  UiDesktopHeaderContainerComponent,
  UiDesktopNavbarComponent,
  UiDesktopNavbarLinkComponent,
  UiMobileContentComponent,
  UiMobileHeaderComponent,
  UiMobileHeaderContainerComponent,
  UiMobileNavbarComponent,
  UiMobileNavbarContainerComponent,
  UiMobileNavbarLinkComponent,
  UiDesktopHeaderLeftContentDirective,
  UiDesktopHeaderCenterContentDirective,
  UiDesktopHeaderRightContentDirective,
  UiMobileHeaderLeftContentDirective,
  UiMobileHeaderCenterContentDirective,
  UiMobileHeaderRightContentDirective,
];

@NgModule({
  declarations: [...exportedComponents],
  imports: [CommonModule, UiIconModule],
  exports: [...exportedComponents],
})
export class UiLayoutModule {}
