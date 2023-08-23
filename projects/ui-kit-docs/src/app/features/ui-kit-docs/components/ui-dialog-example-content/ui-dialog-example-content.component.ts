import { ChangeDetectionStrategy, Component, Input, ViewContainerRef } from '@angular/core';
import { UiDialogRef, UiDialogService } from '@pandev-srl/ui-kit-ng';
import { UiDialogAlertComponent } from '@pandev-srl/ui-kit-ng';

@Component({
  selector: 'ui-docs-ui-dialog-example-content',
  templateUrl: './ui-dialog-example-content.component.html',
  styleUrls: ['./ui-dialog-example-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDialogExampleContentComponent {
  @Input() testProperty: string | null = null;

  constructor(
    private dialogService: UiDialogService,
    private dialogRef: UiDialogRef<UiDialogExampleContentComponent>,
    private viewContainerRef: ViewContainerRef,
  ) {}

  onOpenDialog(): void {
    this.dialogService.open<UiDialogAlertComponent>(UiDialogAlertComponent, (_instance) => {}, {
      viewContainerRef: this.viewContainerRef,
      closeOnBackdropClick: true,
    });
  }

  onCloseDialog(): void {
    this.dialogRef.hide();
  }
}
