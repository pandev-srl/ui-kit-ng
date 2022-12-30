import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  EventEmitter,
  HostBinding,
  Inject,
  Injector,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UiInputErrorsService } from '../services/ui-input-errors.service';
import {
  UI_INPUT_VALIDATION_ERROR_ICON,
  UI_INPUT_VALIDATION_PENDING_ICON,
  UI_INPUT_VALIDATION_SUCCESS_ICON,
} from '../models';

@Directive()
export class UiAbstractControlDirective<T> implements AfterViewInit, OnDestroy, ControlValueAccessor {
  @Input() id?: string;
  @Input() label: string | null = null;

  @HostBinding('class.validations-disabled')
  @Input()
  disableValidationColors: boolean = false;

  @Output() userInput = new EventEmitter<T>();
  @Output() valueChange = new EventEmitter<T>();

  _isValid = false;
  @HostBinding('class.is-valid') get isValid(): boolean {
    return !this.disableValidationColors && this._isValid;
  }

  set isValid(value: boolean) {
    this._isValid = value;
  }

  _isInvalid = false;

  @HostBinding('class.is-invalid') get isInvalid(): boolean {
    return !this.disableValidationColors && this._isInvalid;
  }

  set isInvalid(value: boolean) {
    this._isInvalid = value;
  }

  _isPending = false;

  @HostBinding('class.is-pending') get isPending(): boolean {
    return !this.disableValidationColors && this._isPending;
  }

  set isPending(value: boolean) {
    this._isPending = value;
  }

  statusChangeSub: Subscription | null = null;
  errorsMap: { [key: string]: string } = {};

  private _value: T | null = null;
  get value(): T | null {
    return this._value;
  }

  set value(value: T | null) {
    this._value = value;
  }

  control: AbstractControl | null = null;

  constructor(
    private errorsService: UiInputErrorsService,
    @Inject(UI_INPUT_VALIDATION_SUCCESS_ICON) public defaultSuccessIcon: string,
    @Inject(UI_INPUT_VALIDATION_ERROR_ICON) public defaultErrorIcon: string,
    @Inject(UI_INPUT_VALIDATION_PENDING_ICON) public defaultPendingIcon: string,
    protected injector: Injector,
    protected cdr: ChangeDetectorRef,
  ) {
    this.errorsMap = errorsService.errorsMap;
  }

  ngAfterViewInit(): void {
    this.control = this.injector.get(NgControl)?.control || null;

    this.statusChangeSub =
      this.control?.statusChanges?.subscribe(() => {
        this.setupStatus();
      }) || null;
    this.setupStatus();
  }

  ngOnDestroy(): void {
    if (this.statusChangeSub) {
      this.statusChangeSub.unsubscribe();
    }
  }

  get isDirtyOrTouched(): boolean {
    return !!this.control?.dirty || !!this.control?.touched;
  }

  get errors(): { [p: string]: string } | ValidationErrors {
    return this.control?.errors || {};
  }

  get hasErrors(): boolean {
    return Object.keys(this.errors).length > 0;
  }

  setupStatus(): void {
    this.isValid = this.isDirtyOrTouched && !!this.control?.valid;
    this.isInvalid = this.isDirtyOrTouched && !!this.control?.invalid;
    this.isPending = this.isDirtyOrTouched && !!this.control?.pending;

    this.cdr.markForCheck();
  }

  protected onChange = (_value: T | null): void => {};
  protected onTouch = (): void => {};

  registerOnChange(fn: (id: T | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {}

  writeValue(obj: any): void {
    this.value = obj;
  }
}
