import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injector,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UiAbstractInputDirective } from '../../directives/ui-abstract-input.directive';
import { UiInputErrorsService } from '../../services/ui-input-errors.service';
import {
  UI_INPUT_VALIDATION_ERROR_ICON,
  UI_INPUT_VALIDATION_PENDING_ICON,
  UI_INPUT_VALIDATION_SUCCESS_ICON,
  UI_SELECT_CARET_CLOSE_ICON,
  UI_SELECT_CARET_OPEN_ICON,
  UI_SELECT_CLEAR_ICON,
  UiFormOption,
} from '../../models';
import { first, Subscription } from 'rxjs';

@Component({
  selector: 'ui-select',
  templateUrl: './ui-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: UiSelectComponent,
      multi: true,
    },
  ],
})
export class UiSelectComponent
  extends UiAbstractInputDirective<any>
  implements ControlValueAccessor, OnDestroy, OnChanges
{
  @Input() autoClose = true;
  @Input() clearable = false;
  @Input() closeOnClick = true;
  @Input() menuPlacement: 'left' | 'right' = 'left';
  @Input() openOnKeyUpDown = true;
  @Input() options: UiFormOption[] = [];
  @Input() prompt = 'Select an option...';
  @Input() loading = false;

  selectedOption: UiFormOption | null = null;
  selectedOptionIndex: number | null = null;

  searchTimeout: number | undefined;
  quickSelectTerm: string = '';
  scrollViewSub: Subscription | null = null;

  // Two-way binding for opened state
  @Input() opened = false;
  @Output() openedChange = new EventEmitter<boolean>();

  @ViewChildren('optionRef') optionRef: QueryList<ElementRef> | undefined;

  @HostListener('keydown', ['$event'])
  handleKeyDown($event: KeyboardEvent): void {
    const keyCode = $event.code;

    switch (keyCode) {
      case 'ArrowDown':
        $event.preventDefault();
        this.handleUpDown('down');
        break;
      case 'ArrowUp':
        $event.preventDefault();
        this.handleUpDown('up');
        break;
      case 'Tab':
        this.handleTab();
        break;
      case 'Escape':
        $event.preventDefault();
        this.handleEscape();
        break;
      case 'Enter':
        $event.preventDefault();
        this.handleEnter();
        break;
      default:
        $event.preventDefault();

        const condition =
          keyCode.startsWith('Key') ||
          (keyCode.startsWith('Digit') && /[0-9]+$/.test(keyCode)) ||
          (keyCode.startsWith('Numpad') && /[0-9]+$/.test(keyCode));

        if (condition) {
          this.handleKeyQuickSelect($event.key);
        }
    }
  }

  constructor(
    errorsService: UiInputErrorsService,
    @Inject(UI_INPUT_VALIDATION_SUCCESS_ICON) defaultSuccessIcon: string,
    @Inject(UI_INPUT_VALIDATION_ERROR_ICON) defaultErrorIcon: string,
    @Inject(UI_INPUT_VALIDATION_PENDING_ICON) defaultPendingIcon: string,
    @Inject(UI_SELECT_CLEAR_ICON) public defaultClearIcon: string,
    @Inject(UI_SELECT_CARET_OPEN_ICON) public defaultCaretOpenIcon: string,
    @Inject(UI_SELECT_CARET_CLOSE_ICON) public defaultCaretCloseIcon: string,
    injector: Injector,
    cdr: ChangeDetectorRef,
  ) {
    super(errorsService, defaultSuccessIcon, defaultErrorIcon, defaultPendingIcon, injector, cdr);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options']) {
      this.resetSelectState();
    }
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();

    this.scrollViewSub?.unsubscribe();
  }

  override writeValue(obj: any): void {
    this.value = obj;
    this.selectedOption = this.findOptionByValue(obj);
    this.cdr.markForCheck();
  }

  open(): void {
    this.opened = true;
    this.openedChange.emit(this.opened);
    this.cdr.markForCheck();
  }

  close(): void {
    this.opened = false;
    this.openedChange.emit(this.opened);
    this.cdr.markForCheck();
  }

  onToggle(): void {
    if (this.opened) {
      this.close();
    } else {
      this.open();
    }
  }

  onClickOutside(): void {
    this.autoClose && this.close();
  }

  onSelectOption(idx: number | null): void {
    this.setNewOptionByIndex(idx);

    this.onChange(this.selectedOption?.value || null);
    this.writeValue(this.selectedOption?.value || null);
    this.onUserInput();
    this.onValueChange();

    if (this.closeOnClick) {
      this.close();
    }
  }

  onUserInput(): void {
    this.userInput.emit(this.value);
  }

  onValueChange(): void {
    this.valueChange.emit(super.value || undefined);
  }

  onClear(): void {
    this.onSelectOption(null);
  }

  private setNewOptionByIndex(idx: number | null): void {
    let option: UiFormOption | null = null;
    if (idx !== null) {
      option = this.options[idx] || null;
    }

    if (option) {
      this.selectedOption = option;
      this.selectedOptionIndex = idx;
    } else {
      this.selectedOption = null;
      this.selectedOptionIndex = null;
    }

    this.cdr.markForCheck();
  }

  private resetSelectState(): void {
    if (this.value) {
      this.selectedOption = this.findOptionByValue(this.value);
      this.selectedOptionIndex = this.selectedOption ? this.options.indexOf(this.selectedOption) : null;
    }

    this.onChange(this.selectedOption?.value || null);
    this.writeValue(this.selectedOption?.value || null);

    this.control?.markAsPristine();
    this.control?.markAsUntouched();

    this.setupStatus();
  }

  private findOptionByValue(value: any): UiFormOption | null {
    return this.options.find((el) => el.value === value) || null;
  }

  private handleTab(): void {
    this.close();
  }

  private handleEscape(): void {
    this.close();
  }

  private handleEnter(): void {
    this.close();
  }

  private handleKeyQuickSelect(key: string): void {
    clearTimeout(this.searchTimeout);
    this.quickSelectTerm += key;
    this.searchTimeout = window.setTimeout(() => {
      const parsedTerm = this.quickSelectTerm.toLowerCase();
      for (let i = 0; i < this.options.length; i++) {
        if (this.options[i].label.toLowerCase().includes(parsedTerm)) {
          this.setNewOptionByIndex(i);
          this.scrollToOptionRef(i, { block: 'nearest', inline: 'nearest', behavior: 'auto' });

          return;
        }
        this.quickSelectTerm = '';
      }
    }, 200);
  }

  private handleUpDown(dir: 'up' | 'down'): void {
    if (this.openOnKeyUpDown) {
      this.open();
    }

    let newIdx: number;
    if (this.selectedOptionIndex === null) {
      newIdx = dir === 'up' ? this.options.length - 1 : 0;
    } else {
      const delta = dir === 'up' ? -1 : 1;

      newIdx = (this.selectedOptionIndex + delta) % this.options.length;
      if (newIdx < 0) {
        newIdx = this.options.length + newIdx;
      }
    }

    this.setNewOptionByIndex(newIdx);

    this.scrollViewSub =
      this.optionRef?.changes.pipe(first()).subscribe(() => {
        this.scrollToOptionRef(newIdx, { block: 'nearest' });
      }) || null;
    this.scrollToOptionRef(newIdx, { block: 'nearest' });

    this.onUserInput();
  }

  private scrollToOptionRef(index: number | null, options: ScrollIntoViewOptions = {}): void {
    if (this.optionRef && index != null) {
      this.cdr.markForCheck();

      (this.optionRef?.get(index)?.nativeElement as HTMLElement | undefined)?.scrollIntoView({ ...options });
    }
  }
}
