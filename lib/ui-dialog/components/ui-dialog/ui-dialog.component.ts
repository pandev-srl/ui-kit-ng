import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { UiDialogRef } from '../../models';
import { UiDialogService } from '../../services/ui-dialog.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { UiDialogRefStoreService } from '../../services/ui-dialog-ref-store.service';

@Component({
  selector: 'ui-dialog',
  templateUrl: './ui-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('animationState', [
      state(
        'opened',
        style({
          opacity: 1,
        }),
      ),
      transition('void => opened', [
        style({
          opacity: 0,
        }),
        animate(100),
      ]),
      transition('* => void', [
        animate(
          100,
          style({
            opacity: 0,
          }),
        ),
      ]),
    ]),
  ],
})
export class UiDialogComponent implements AfterViewInit {
  @HostBinding('@animationState') animation = 'opened';

  @ViewChild('vcr', { read: ViewContainerRef })
  public vcr: ViewContainerRef | null = null;

  closeOnBackdropClick(el: MouseEvent): void {
    if (this.dialogRef.options?.closeOnBackdropClick) {
      this.dialogRef.hide();
    }
  }

  constructor(
    private elRef: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private dialogService: UiDialogService,
    private dialogRefStoreService: UiDialogRefStoreService,
    private dialogRef: UiDialogRef<any>,
  ) {}

  ngAfterViewInit(): void {
    const actualZIndex = window.getComputedStyle(this.elRef.nativeElement).zIndex;

    this.renderer.setStyle(
      this.elRef.nativeElement,
      'zIndex',
      parseInt(actualZIndex) + this.dialogRefStoreService.dialogRefs.indexOf(this.dialogRef.dialogRef),
    );
  }
}
