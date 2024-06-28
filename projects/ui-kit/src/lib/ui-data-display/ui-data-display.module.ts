import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiDataDisplayComponent } from './components/ui-data-display/ui-data-display.component';
import { UiDataDisplayItemComponent } from './components/ui-data-display-item/ui-data-display-item.component';
import { UiDataDisplayItemContentComponent } from './components/ui-data-display-item-content/ui-data-display-item-content.component';
import { UiDataDisplayItemLabelComponent } from './components/ui-data-display-item-label/ui-data-display-item-label.component';

@NgModule({
  declarations: [
    UiDataDisplayComponent,
    UiDataDisplayItemComponent,
    UiDataDisplayItemContentComponent,
    UiDataDisplayItemLabelComponent,
  ],
  imports: [CommonModule],
  exports: [
    UiDataDisplayComponent,
    UiDataDisplayItemComponent,
    UiDataDisplayItemContentComponent,
    UiDataDisplayItemLabelComponent,
  ],
})
export class UiDataDisplayModule {}
