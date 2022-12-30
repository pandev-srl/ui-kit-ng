import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiDropdownComponent } from './components/ui-dropdown/ui-dropdown.component';
import { UiDropdownMenuComponent } from './components/ui-dropdown-menu/ui-dropdown-menu.component';
import { UiDropdownItemComponent } from './components/ui-dropdown-item/ui-dropdown-item.component';
import { UiDropdownToggleDirective } from './directives/ui-dropdown-toggle.directive';
import { UiClickOutsideModule } from '../ui-click-outside';

const exportedComponents = [
  UiDropdownComponent,
  UiDropdownMenuComponent,
  UiDropdownItemComponent,
  UiDropdownToggleDirective,
];

@NgModule({
  declarations: [...exportedComponents],
  imports: [CommonModule, UiClickOutsideModule],
  exports: [...exportedComponents],
})
export class UiDropdownModule {}
