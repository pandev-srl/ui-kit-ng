import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-desktop-content-container',
  templateUrl: './ui-desktop-content-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDesktopContentContainerComponent {}
