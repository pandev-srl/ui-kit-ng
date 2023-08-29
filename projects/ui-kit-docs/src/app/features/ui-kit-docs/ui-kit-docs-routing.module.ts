import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconsComponent } from './containers/icons/icons.component';
import { LayoutsComponent } from './containers/layouts/layouts.component';
import { ButtonsComponent } from './containers/buttons/buttons.component';
import { DropdownsComponent } from './containers/dropdowns/dropdowns.component';
import { HeadingsComponent } from './containers/headings/headings.component';
import { LoadingComponent } from './containers/loading/loading.component';
import { PanelsComponent } from './containers/panels/panels.component';
import { AlertsComponent } from './containers/alerts/alerts.component';
import { FormsComponent } from './containers/forms/forms.component';
import { DialogsComponent } from './containers/dialogs/dialogs.component';
import { BadgesComponent } from './containers/badges/badges.component';
import { ActionMessagesComponent } from './containers/action-messages/action-messages.component';
import { CalendarComponent } from './containers/calendar/calendar.component';
import { RootLayoutComponent } from './layouts/root-layout/root-layout.component';
import { DrawerRootLayoutComponent } from './layouts/drawer-root-layout/drawer-root-layout.component';
import { TablesComponent } from './containers/tables/tables.component';
import { PaginatorComponent } from './containers/paginator/paginator.component';

const docsRoutes: Routes = [
  {
    path: '',
    redirectTo: 'action-messages',
    pathMatch: 'full',
  },
  {
    path: 'action-messages',
    component: ActionMessagesComponent,
  },
  {
    path: 'alerts',
    component: AlertsComponent,
  },
  {
    path: 'badges',
    component: BadgesComponent,
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
  {
    path: 'dialogs',
    component: DialogsComponent,
  },
  {
    path: 'dropdowns',
    component: DropdownsComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
  {
    path: 'headings',
    component: HeadingsComponent,
  },
  {
    path: 'icons',
    component: IconsComponent,
  },
  {
    path: 'layouts',
    component: LayoutsComponent,
  },
  {
    path: 'loading',
    component: LoadingComponent,
  },
  {
    path: 'panels',
    component: PanelsComponent,
  },
  {
    path: 'paginator',
    component: PaginatorComponent,
  },
  {
    path: 'tables',
    component: TablesComponent,
  },
];

const routes: Routes = [
  {
    path: '',
    redirectTo: '/docs/app',
    pathMatch: 'full',
  },
  {
    path: 'app',
    component: RootLayoutComponent,
    children: [...docsRoutes],
  },
  {
    path: 'drawer',
    component: DrawerRootLayoutComponent,
    children: [...docsRoutes],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiKitDocsRoutingModule {}
