import { ChangeDetectionStrategy, Component, HostBinding, Inject, Input, OnInit } from '@angular/core';
import { UI_DEFAULT_ICON_SET } from '../../../ui-icon/models';
import { UI_LOADING_DEFAULT_ICON_SET, UI_LOADING_ICON } from '../../models';
import { UiHeadingSize } from '../../../ui-heading';

@Component({
  selector: 'ui-loading',
  templateUrl: './ui-loading.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiLoadingComponent implements OnInit {
  @Input() uiIcon = this.uiLoadingIcon;
  @Input() uiIconSet = this.uiLoadingDefaultIconSet || this.defaultIconSet;
  @Input() spin = true;
  @Input() uiIconSize = 'fa-3x';

  @Input() title: string | null = null;
  @Input() titleSize: UiHeadingSize = 'h3';

  @Input() @HostBinding('class.filter-backdrop') filterBackdrop = true;
  @Input() @HostBinding('class.fullscreen') fullscreen = false;

  constructor(
    @Inject(UI_LOADING_ICON) private uiLoadingIcon: string,
    @Inject(UI_DEFAULT_ICON_SET) private defaultIconSet: string,
    @Inject(UI_LOADING_DEFAULT_ICON_SET) private uiLoadingDefaultIconSet: string | null,
  ) {}

  ngOnInit(): void {}
}
