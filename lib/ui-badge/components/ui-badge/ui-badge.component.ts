import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { UiTheme } from '../../../models';
import { UI_BADGE_LOADING_DEFAULT_ICON_SET, UI_BADGE_LOADING_ICON } from '../../models';

@Component({
  selector: 'ui-badge',
  templateUrl: './ui-badge.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiBadgeComponent implements OnInit, OnChanges {
  @Input() title: string | null = null;
  @Input() pulse = false;
  @Input() loading: boolean | null = false;
  @Input() theme: UiTheme = 'primary';

  @HostBinding('class.badge-primary') badgePrimary = false;
  @HostBinding('class.badge-secondary') badgeSecondary = false;
  @HostBinding('class.badge-accent') badgeAccent = false;
  @HostBinding('class.badge-danger') badgeDanger = false;
  @HostBinding('class.badge-success') badgeSuccess = false;
  @HostBinding('class.badge-warning') badgeWarning = false;
  @HostBinding('class.badge-info') badgeInfo = false;

  constructor(
    @Inject(UI_BADGE_LOADING_DEFAULT_ICON_SET) public defaultLoadingIconSet: string,
    @Inject(UI_BADGE_LOADING_ICON) public defaultLoadingIcon: string,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['theme']) {
      this.setTheme();
    }
  }

  ngOnInit(): void {}

  private setTheme(): void {
    this.badgePrimary = false;
    this.badgeSecondary = false;
    this.badgeAccent = false;
    this.badgeDanger = false;
    this.badgeSuccess = false;
    this.badgeWarning = false;
    this.badgeInfo = false;

    switch (this.theme) {
      case 'primary':
        this.badgePrimary = true;
        break;
      case 'secondary':
        this.badgeSecondary = true;
        break;
      case 'accent':
        this.badgeAccent = true;
        break;
      case 'danger':
        this.badgeDanger = true;
        break;
      case 'success':
        this.badgeSuccess = true;
        break;
      case 'warning':
        this.badgeWarning = true;
        break;
      case 'info':
        this.badgeInfo = true;
        break;
      default:
    }
  }
}
