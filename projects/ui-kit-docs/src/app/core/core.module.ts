import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiDialogModule, UiKitModule } from '@pandev-srl/ui-kit-ng';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [],
  imports: [CommonModule, UiKitModule, RouterModule, LayoutModule, UiDialogModule],
  exports: [],
})
export class CoreModule {}
