import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPanelComponent } from './components/ui-panel/ui-panel.component';
import { UiPanelBodyComponent } from './components/ui-panel-body/ui-panel-body.component';
import { UiPanelHeaderComponent } from './components/ui-panel-header/ui-panel-header.component';
import { UiPanelFooterComponent } from './components/ui-panel-footer/ui-panel-footer.component';
import { UiLoadingModule } from '../ui-loading';

const exportedComponents = [UiPanelComponent, UiPanelBodyComponent, UiPanelHeaderComponent, UiPanelFooterComponent];

@NgModule({
  declarations: [...exportedComponents],
  imports: [CommonModule, UiLoadingModule],
  exports: [...exportedComponents],
})
export class UiPanelModule {}
