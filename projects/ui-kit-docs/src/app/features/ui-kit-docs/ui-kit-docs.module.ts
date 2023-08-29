import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiKitDocsRoutingModule } from './ui-kit-docs-routing.module';
import { IconsComponent } from './containers/icons/icons.component';
import { LayoutsComponent } from './containers/layouts/layouts.component';
import { UiKitModule } from '@pandev-srl/ui-kit-ng';
import { DropdownsComponent } from './containers/dropdowns/dropdowns.component';
import { ButtonsComponent } from './containers/buttons/buttons.component';
import { HeadingsComponent } from './containers/headings/headings.component';
import { LoadingComponent } from './containers/loading/loading.component';
import { PanelsComponent } from './containers/panels/panels.component';
import { AlertsComponent } from './containers/alerts/alerts.component';
import { FormsComponent } from './containers/forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogsComponent } from './containers/dialogs/dialogs.component';
import { UiDialogExampleContentComponent } from './components/ui-dialog-example-content/ui-dialog-example-content.component';
import { BadgesComponent } from './containers/badges/badges.component';
import { ActionMessagesComponent } from './containers/action-messages/action-messages.component';
import { CalendarComponent } from './containers/calendar/calendar.component';
import { RootLayoutComponent } from './layouts/root-layout/root-layout.component';
import { MobileLayoutComponent } from './layouts/mobile-layout/mobile-layout.component';
import { DesktopLayoutComponent } from './layouts/desktop-layout/desktop-layout.component';
import { SimpleNavLinksComponent } from './components/simple-nav-links/simple-nav-links.component';
import { DrawerRootLayoutComponent } from './layouts/drawer-root-layout/drawer-root-layout.component';
import { TablesComponent } from './containers/tables/tables.component';
import { PaginatorComponent } from './containers/paginator/paginator.component';

@NgModule({
  declarations: [
    RootLayoutComponent,
    MobileLayoutComponent,
    DesktopLayoutComponent,
    SimpleNavLinksComponent,
    DrawerRootLayoutComponent,

    ButtonsComponent,
    DropdownsComponent,
    IconsComponent,
    LayoutsComponent,
    HeadingsComponent,
    LoadingComponent,
    PanelsComponent,
    AlertsComponent,
    FormsComponent,
    DialogsComponent,
    UiDialogExampleContentComponent,
    BadgesComponent,
    ActionMessagesComponent,
    CalendarComponent,
    TablesComponent,
    PaginatorComponent,
  ],
  imports: [CommonModule, UiKitModule, UiKitDocsRoutingModule, ReactiveFormsModule],
})
export class UiKitDocsModule {}
