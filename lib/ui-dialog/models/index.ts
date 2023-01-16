import { ComponentRef, ViewContainerRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UiDialogComponent } from '../components/ui-dialog/ui-dialog.component';
import { UiDialogService } from '../services/ui-dialog.service';

export interface UiDialogOptions {
  closeOnBackdropClick?: boolean;
  viewContainerRef: ViewContainerRef;
}

export abstract class UiDialogRef<T> {
  abstract options: UiDialogOptions | null;
  abstract dialogRef: ComponentRef<UiDialogComponent> | null;
  abstract contentRef: ComponentRef<T> | null;
  abstract contentInstance: T | null;
  abstract onHide: Observable<void>;
  abstract hide(): void;
}

export class UiDialogRefImpl<T> {
  private _options: UiDialogOptions | null = null;
  private _dialogRef: ComponentRef<UiDialogComponent> | null = null;
  private _contentRef: ComponentRef<T> | null = null;
  private _onHide = new Subject<void>();

  constructor(private dialogService: UiDialogService) {}

  get onHide(): Observable<void> {
    return this._onHide;
  }

  get dialogRef(): ComponentRef<UiDialogComponent> | null {
    return this._dialogRef;
  }

  set dialogRef(dialogRef: ComponentRef<UiDialogComponent> | null) {
    this._dialogRef = dialogRef;
  }

  get contentRef(): ComponentRef<T> | null {
    return this._contentRef;
  }

  set contentRef(contentRef: ComponentRef<T> | null) {
    this._contentRef = contentRef;
  }

  get options(): UiDialogOptions | null {
    return this._options;
  }

  set options(options: UiDialogOptions | null) {
    this._options = options;
  }

  get contentInstance(): T | null {
    return this._contentRef?.instance || null;
  }

  hide(): void {
    this._onHide.next();
    this.dialogService.close(this);
    this._onHide.complete();
  }
}
