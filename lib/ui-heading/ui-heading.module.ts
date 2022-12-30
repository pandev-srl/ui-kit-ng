import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiHeadingComponent } from './components/ui-heading/ui-heading.component';

@NgModule({
  declarations: [UiHeadingComponent],
  imports: [CommonModule],
  exports: [UiHeadingComponent],
})
export class UiHeadingModule {}
