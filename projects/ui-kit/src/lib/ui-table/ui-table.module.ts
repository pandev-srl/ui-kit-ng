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
];

@NgModule({
  declarations: [...exportedComponents],
  imports: [CommonModule],
  exports: [...exportedComponents],
})
export class UiTableModule {}
