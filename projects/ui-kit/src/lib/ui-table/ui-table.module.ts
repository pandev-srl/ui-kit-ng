import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTableComponent } from './components/ui-table/ui-table.component';
import { UiTcaptionComponent } from './components/ui-tcaption/ui-tcaption.component';
import { UiTcolgroupComponent } from './components/ui-tcolgroup/ui-tcolgroup.component';
import { UiTheadComponent } from './components/ui-thead/ui-thead.component';
import { UiTfootComponent } from './components/ui-tfoot/ui-tfoot.component';
import { UiTbodyComponent } from './components/ui-tbody/ui-tbody.component';
import { UiTdComponent } from './components/ui-td/ui-td.component';
import { UiTcolComponent } from './components/ui-tcol/ui-tcol.component';
import { UiTrComponent } from './components/ui-tr/ui-tr.component';
import { UiTableContainerComponent } from './components/ui-table-container/ui-table-container.component';
import { UiTdSortLinkComponent } from './components/ui-td-sort-link/ui-td-sort-link.component';
import { UiIconModule } from '../ui-icon';
import {
  UI_TD_SORT_LINK_DEFAULT_ICON_DOWN,
  UI_TD_SORT_LINK_DEFAULT_ICON_NONE,
  UI_TD_SORT_LINK_DEFAULT_ICON_SET,
  UI_TD_SORT_LINK_DEFAULT_ICON_UP,
} from './models';

const exportedComponents = [
  UiTableComponent,
  UiTcaptionComponent,
  UiTcolgroupComponent,
  UiTheadComponent,
  UiTfootComponent,
  UiTbodyComponent,
  UiTdComponent,
  UiTcolComponent,
  UiTrComponent,
  UiTableContainerComponent,
  UiTdSortLinkComponent,
];

@NgModule({
  declarations: [...exportedComponents],
  imports: [CommonModule, UiIconModule],
  exports: [...exportedComponents],
  providers: [
    {
      provide: UI_TD_SORT_LINK_DEFAULT_ICON_SET,
      useValue: null,
    },
    {
      provide: UI_TD_SORT_LINK_DEFAULT_ICON_UP,
      useValue: 'fa-sort-up',
    },
    {
      provide: UI_TD_SORT_LINK_DEFAULT_ICON_DOWN,
      useValue: 'fa-sort-down',
    },
    {
      provide: UI_TD_SORT_LINK_DEFAULT_ICON_NONE,
      useValue: 'fa-sort',
    },
  ],
})
export class UiTableModule {}
