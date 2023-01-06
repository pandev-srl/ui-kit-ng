import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { UiTheme } from '../../models';

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
  @HostBinding('class.badge-danger') badgeDanger = false;
  @HostBinding('class.badge-success') badgeSuccess = false;
  @HostBinding('class.badge-warning') badgeWarning = false;
  @HostBinding('class.badge-info') badgeInfo = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['theme']) {
      this.setTheme();
    }
  }

  ngOnInit(): void {}

  private setTheme(): void {
    this.badgePrimary = false;
    this.badgeSecondary = false;
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
