import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPaginatorComponent } from './components/ui-paginator/ui-paginator.component';
import { UiIconModule } from '../ui-icon';

const exportedDeclarations = [UiPaginatorComponent];

@NgModule({
  declarations: [...exportedDeclarations],
  imports: [CommonModule, UiIconModule],
  exports: [...exportedDeclarations],
})
export class UiPaginatorModule {}
