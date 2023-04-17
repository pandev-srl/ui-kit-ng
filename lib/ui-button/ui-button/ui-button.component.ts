import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
  OnChanges,
  SimpleChanges,
  Inject,
} from '@angular/core';
import { UiTheme } from '../../models';
import { UI_BUTTON_DEFAULT_SPINNER_ICON, UiButtonSize, UiButtonStyle } from '../models';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[ui-button]',
  templateUrl: './ui-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiButtonComponent implements OnInit, OnChanges {
  @Input() theme: UiTheme = 'primary';
  @Input() buttonStyle: UiButtonStyle = 'solid';
  @Input() size: UiButtonSize = 'md';
  @Input() spinnerIcon = this.defaultSpinnerIcon;
  @Input() set disable(val: boolean) {
    this._disable = val;
    this.calculateDisabled();
  }
  @Input() set isLoading(val: boolean) {
    this._isLoading = val;
    this.calculateDisabled();
  }

  get disable(): boolean {
    return this._disable;
  }

  get isLoading(): boolean {
    return this._isLoading;
  }

  @HostBinding('class.btn-primary') btnPrimary = false;
  @HostBinding('class.btn-secondary') btnSecondary = false;
  @HostBinding('class.btn-accent') btnAccent = false;
  @HostBinding('class.btn-danger') btnDanger = false;
  @HostBinding('class.btn-success') btnSuccess = false;
  @HostBinding('class.btn-warning') btnWarning = false;
  @HostBinding('class.btn-info') btnInfo = false;

  @HostBinding('class.btn-solid') btnSolid = false;
  @HostBinding('class.btn-outline') btnOutline = false;
  @HostBinding('class.btn-inline') btnInline = false;

  @HostBinding('class.btn-xl') btnXl = false;
  @HostBinding('class.btn-lg') btnLg = false;
  @HostBinding('class.btn-md') btnMd = false;
  @HostBinding('class.btn-sm') btnSm = false;
  @HostBinding('class.btn-xs') btnXs = false;

  @HostBinding('disabled')
  private _disabled = false;
  private _disable = false;
  private _isLoading = false;

  constructor(@Inject(UI_BUTTON_DEFAULT_SPINNER_ICON) private defaultSpinnerIcon: string) {}

  ngOnInit(): void {
    this.setTheme();
    this.setSize();
    this.setThemeStyle();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['theme']) {
      this.setTheme();
    }

    if (changes['size']) {
      this.setSize();
    }

    if (changes['themeStyle']) {
      this.setThemeStyle();
    }
  }

  private calculateDisabled(): void {
    this._disabled = this._disable || this._isLoading;
  }

  private setTheme(): void {
    this.btnPrimary = false;
    this.btnSecondary = false;
    this.btnAccent = false;
    this.btnDanger = false;
    this.btnSuccess = false;
    this.btnWarning = false;
    this.btnInfo = false;

    switch (this.theme) {
      case 'primary':
        this.btnPrimary = true;
        break;
      case 'secondary':
        this.btnSecondary = true;
        break;
      case 'accent':
        this.btnSecondary = true;
        break;
      case 'danger':
        this.btnDanger = true;
        break;
      case 'success':
        this.btnSuccess = true;
        break;
      case 'warning':
        this.btnWarning = true;
        break;
      case 'info':
        this.btnInfo = true;
        break;
      default:
    }
  }

  private setSize(): void {
    this.btnXl = false;
    this.btnLg = false;
    this.btnMd = false;
    this.btnSm = false;
    this.btnXs = false;

    switch (this.size) {
      case 'xl':
        this.btnXl = true;
        break;
      case 'lg':
        this.btnLg = true;
        break;
      case 'md':
        this.btnMd = true;
        break;
      case 'sm':
        this.btnSm = true;
        break;
      case 'xs':
        this.btnXs = true;
        break;
      default:
    }
  }

  private setThemeStyle(): void {
    this.btnSolid = false;
    this.btnOutline = false;
    this.btnInline = false;

    switch (this.buttonStyle) {
      case 'solid':
        this.btnSolid = true;
        break;
      case 'outline':
        this.btnOutline = true;
        break;
      case 'inline':
        this.btnInline = true;
        break;
      default:
    }
  }
}
