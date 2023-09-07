import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiStatComponent } from './components/ui-stat/ui-stat.component';
import { UiIconModule } from '../ui-icon';
import { UiStatFooterContentDirective } from './directives/ui-stat-footer-content.directive';

const exportedComponents = [UiStatComponent, UiStatFooterContentDirective];

@NgModule({
  declarations: [...exportedComponents],
  imports: [CommonModule, UiIconModule],
  exports: [...exportedComponents],
})
export class UiStatModule {}
