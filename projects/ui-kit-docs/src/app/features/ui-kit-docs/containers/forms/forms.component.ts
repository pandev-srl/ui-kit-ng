import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { UiFormOption } from '@pandev-srl/ui-kit-ng';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'ui-docs-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsComponent implements OnInit {
  form: FormGroup<{
    inputText1: FormControl<string | null>;
    inputPassword1: FormControl<string | null>;
    inputWithAsyncValidationTrue: FormControl<string | null>;
    inputWithAsyncValidationFalse: FormControl<string | null>;
    inputTextDisabledValidations: FormControl<string | null>;

    textarea1: FormControl<string | null>;
    textareaWithAsyncValidationTrue: FormControl<string | null>;
    textareaWithAsyncValidationFalse: FormControl<string | null>;
    textareaTextDisabledValidations: FormControl<string | null>;

    inputNumber1: FormControl<number | null>;
    inputNumberWithAsyncValidationTrue: FormControl<number | null>;
    inputNumberWithAsyncValidationFalse: FormControl<number | null>;

    boolean1: FormControl<boolean | null>;
    boolean2: FormControl<boolean | null>;
    boolean3: FormControl<boolean>;
    boolean4: FormControl<boolean>;
    boolean5: FormControl<boolean>;

    select1: FormControl<string | null>;
    select2: FormControl<string | null>;
  }>;

  selectOptionsExample: UiFormOption[] = [];

  selectOptionsExample1: UiFormOption[] = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
    { label: 'Option 4', value: '4' },
    { label: 'Option 5', value: '5' },
    { label: 'Option 6', value: '6' },
    { label: 'Option 7', value: '7' },
    { label: 'Option 8', value: '8' },
    { label: 'Option 9', value: '9' },
    { label: 'Option 10', value: '10' },
  ];

  selectOptionsExample2: UiFormOption[] = [
    { label: 'Option 10 Option 1 Option 1 Option 1 Option 1 Option 1 Option 1 ', value: '10' },
    { label: 'Option 20', value: '20' },
    { label: 'Option 30', value: '30' },
    { label: 'Option 40', value: '40' },
    { label: 'Option 50', value: '50' },
    { label: 'Option 60', value: '60' },
    { label: 'Option 70', value: '70' },
    { label: 'Option 80', value: '80' },
    { label: 'Option 90', value: '90' },
    { label: 'Option 100', value: '100' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      inputText1: this.fb.control<string | null>(null, [Validators.required]),
      inputPassword1: this.fb.control<string | null>(null, [Validators.required]),
      inputWithAsyncValidationTrue: this.fb.control<string | null>(
        null,
        [Validators.required],
        [this.asyncTrueValidation()],
      ),
      inputWithAsyncValidationFalse: this.fb.control<string | null>(
        null,
        [Validators.required],
        [this.asyncFalseValidation()],
      ),

      inputTextDisabledValidations: this.fb.control<string | null>(null),

      textarea1: this.fb.control<string | null>(null, [Validators.required]),
      textareaWithAsyncValidationTrue: this.fb.control<string | null>(
        null,
        [Validators.required],
        [this.asyncTrueValidation()],
      ),
      textareaWithAsyncValidationFalse: this.fb.control<string | null>(
        null,
        [Validators.required],
        [this.asyncFalseValidation()],
      ),
      textareaTextDisabledValidations: this.fb.control<string | null>(null),

      inputNumber1: this.fb.control<number | null>(null, [Validators.required]),
      inputNumberWithAsyncValidationTrue: this.fb.control<number | null>(
        null,
        [Validators.required],
        [this.asyncTrueValidation()],
      ),
      inputNumberWithAsyncValidationFalse: this.fb.control<number | null>(
        null,
        [Validators.required],
        [this.asyncFalseValidation()],
      ),

      boolean1: this.fb.control<boolean | null>(null, {
        nonNullable: false,
        validators: [Validators.required],
        asyncValidators: [this.asyncFalseValidation()],
      }),
      boolean2: this.fb.control<boolean | null>(null, {
        nonNullable: false,
        validators: [Validators.required],
        asyncValidators: [this.asyncTrueValidation()],
      }),
      boolean3: this.fb.control<boolean>(false, {
        nonNullable: true,
        validators: [Validators.required],
        asyncValidators: [this.asyncFalseValidation()],
      }),
      boolean4: this.fb.control<boolean>(false, {
        nonNullable: true,
        validators: [Validators.required],
        asyncValidators: [this.asyncTrueValidation()],
      }),
      boolean5: this.fb.control<boolean>(false, {
        nonNullable: true,
        validators: [Validators.required],
        asyncValidators: [this.asyncTrueValidation()],
      }),

      select1: this.fb.control<string | null>(null, {
        validators: [Validators.required],
        asyncValidators: [],
      }),
      select2: this.fb.control<string | null>(null, {
        validators: [Validators.required],
        asyncValidators: [],
      }),
    });
  }

  ngOnInit(): void {
    this.selectOptionsExample = this.selectOptionsExample1;
  }

  onChangeOptionSet(): void {
    this.selectOptionsExample = this.selectOptionsExample2;
  }

  onSelectModelChange(value: any): void {
    console.log('Model change', value);
  }

  onSelectUserInput(value: any): void {
    console.log('User input', value);
  }

  onSelectValueChange(value: any): void {
    console.log('Value change', value);
  }

  private asyncTrueValidation(): AsyncValidatorFn {
    return (_control: AbstractControl): Observable<ValidationErrors | null> => {
      return of(null).pipe(delay(2000));
    };
  }

  private asyncFalseValidation(): AsyncValidatorFn {
    return (_control: AbstractControl): Observable<ValidationErrors | null> => {
      return of({ required: true }).pipe(delay(2000));
    };
  }
}
