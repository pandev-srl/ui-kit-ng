import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  OnChanges,
  SimpleChanges,
  HostBinding,
} from '@angular/core';
import { UiTheme } from '../../models';

@Component({
  selector: 'ui-alert',
  templateUrl: './ui-alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiAlertComponent implements OnInit, OnChanges {
  @Input() theme: UiTheme = 'primary';
  @Input() title: string | null = null;
  @Input() description: string | null = null;
  @Input() icon: string | null = null;
  currentIcon: string | null = null;

  @ViewChild('ref') ref: HTMLElement | null = null;

  @HostBinding('class.alert-primary') alertPrimary = false;
  @HostBinding('class.alert-secondary') alertSecondary = false;
  @HostBinding('class.alert-danger') alertDanger = false;
  @HostBinding('class.alert-success') alertSuccess = false;
  @HostBinding('class.alert-warning') alertWarning = false;
  @HostBinding('class.alert-info') alertInfo = false;

  readonly ICON_MAPS: { [key in UiTheme]: string | null } = {
    primary: null,
    secondary: null,
    danger: 'fa-times-circle',
    success: 'fa-check-circle',
    warning: 'fa-exclamation-circle',
    info: 'fa-info-circle',
  };

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.icon == null && changes['type']) {
      this.currentIcon = this.ICON_MAPS[this.theme];
    } else {
      this.currentIcon = this.icon;
    }

    if (changes['theme']) {
      this.setTheme();
    }
  }

  private setTheme(): void {
    this.alertPrimary = false;
    this.alertSecondary = false;
    this.alertDanger = false;
    this.alertSuccess = false;
    this.alertWarning = false;
    this.alertInfo = false;

    switch (this.theme) {
      case 'primary':
        this.alertPrimary = true;
        break;
      case 'secondary':
        this.alertSecondary = true;
        break;
      case 'danger':
        this.alertDanger = true;
        break;
      case 'success':
        this.alertSuccess = true;
        break;
      case 'warning':
        this.alertWarning = true;
        break;
      case 'info':
        this.alertInfo = true;
        break;
      default:
    }
  }
}
