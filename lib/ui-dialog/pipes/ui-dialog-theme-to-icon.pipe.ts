import { Inject, Pipe, PipeTransform } from '@angular/core';
import { UI_DIALOG_ALERT_DEFAULT_ICONS, UiDialogDefaultIconsMap, UiTheme } from '@/ui-kit';
import { UI_DEFAULT_ICON_SET } from '../../ui-icon/models';

@Pipe({
  name: 'uiDialogThemeToIcon',
})
export class UiDialogThemeToIconPipe implements PipeTransform {
  constructor(
    @Inject(UI_DIALOG_ALERT_DEFAULT_ICONS) public defaultIcons: UiDialogDefaultIconsMap,
    @Inject(UI_DEFAULT_ICON_SET) public defaultIconSet: string,
  ) {}

  transform(icon: string | null, theme: UiTheme): { iconSet: string; iconName: string } {
    return icon
      ? { iconName: icon, iconSet: this.defaultIconSet }
      : {
          iconSet: this.defaultIcons[theme].iconSet || this.defaultIconSet,
          iconName: this.defaultIcons[theme].iconName,
        };
  }
}
