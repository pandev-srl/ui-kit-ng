import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  Inject,
  Injectable,
  Injector,
  RendererFactory2,
  Type,
} from '@angular/core';
import { UiDialogOptions, UiDialogRef, UiDialogRefImpl } from '../models';
import { UiDialogComponent } from '../components/ui-dialog/ui-dialog.component';
import { UiDialogRefStoreService } from './ui-dialog-ref-store.service';

@Injectable()
export class UiDialogService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private uiDialogRefStoreService: UiDialogRefStoreService,
    private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private renderFactory: RendererFactory2,
  ) {}

  open<T>(content: Type<T>, initialize: ((instance: T) => void) | null, options: UiDialogOptions): UiDialogRef<T> {
    const renderer = this.renderFactory.createRenderer(null, null);

    const cfw = this.cfr.resolveComponentFactory(UiDialogComponent);

    const uiDialogRef = new UiDialogRefImpl<T>(this);
    uiDialogRef.options = {
      closeOnBackdropClick: true,
      ...options,
    };

    const dialogComponentRef = cfw.create(
      Injector.create({
        providers: [
          {
            provide: UiDialogRef,
            useValue: uiDialogRef,
          },
        ],
        parent: this.injector,
      }),
    );

    this.uiDialogRefStoreService.dialogRefs.push(dialogComponentRef);
    uiDialogRef.dialogRef = dialogComponentRef;

    this.appRef.attachView(dialogComponentRef.hostView);

    renderer.appendChild(this.document.body, dialogComponentRef.location.nativeElement);

    dialogComponentRef.changeDetectorRef.detectChanges();

    if (dialogComponentRef.instance.vcr) {
      const cnt = dialogComponentRef.instance.vcr.createComponent(content, {
        injector: Injector.create({
          providers: [
            {
              provide: UiDialogRef,
              useValue: uiDialogRef,
            },
          ],
          parent: this.injector,
        }),
      });

      uiDialogRef.contentRef = cnt;

      if (initialize) {
        initialize(cnt.instance);
      }

      cnt.changeDetectorRef.detectChanges();
    }

    return uiDialogRef;
  }

  close(dialogRef: UiDialogRef<any>): void {
    if (dialogRef.dialogRef) {
      const index = this.uiDialogRefStoreService.dialogRefs.indexOf(dialogRef.dialogRef);
      dialogRef.dialogRef.destroy();
      this.uiDialogRefStoreService.dialogRefs[index] = null;
      this.uiDialogRefStoreService.dialogRefs.splice(index, 1);
    }
  }
}
