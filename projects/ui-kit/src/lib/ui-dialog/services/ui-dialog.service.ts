import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Inject,
  Injectable,
  Injector,
  RendererFactory2,
  Type,
} from '@angular/core';
import { UiDialogOptions, UiDialogRef, UiDialogRefImpl } from '../models';
import { UiDialogComponent } from '../components/ui-dialog/ui-dialog.component';
import { UiDialogRefStoreService } from './ui-dialog-ref-store.service';
import { v4 as uuidv4 } from 'uuid';

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

  getById(id: string): UiDialogRef<any> | null {
    return this.uiDialogRefStoreService.getById(id);
  }

  open<T>(
    content: Type<T>,
    initialize: ((instance: T, contentRef: ComponentRef<T>) => void) | null,
    options: UiDialogOptions,
    id?: string,
  ): UiDialogRef<T> {
    const renderer = this.renderFactory.createRenderer(null, null);

    const cfw = this.cfr.resolveComponentFactory(UiDialogComponent);

    const uiDialogRef = new UiDialogRefImpl<T>(this, id ?? uuidv4());
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

    this.uiDialogRefStoreService.dialogRefs.push(uiDialogRef);
    uiDialogRef.dialogRef = dialogComponentRef;

    this.appRef.attachView(dialogComponentRef.hostView);

    renderer.setStyle(this.document.body, 'overflow', 'hidden');
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
        initialize(cnt.instance, uiDialogRef.contentRef);
      }

      cnt.changeDetectorRef.detectChanges();
    }

    return uiDialogRef;
  }

  close(dialogRef: UiDialogRef<any>): void {
    const renderer = this.renderFactory.createRenderer(null, null);

    if (dialogRef.dialogRef) {
      const index = this.uiDialogRefStoreService.dialogRefs.indexOf(dialogRef);
      dialogRef.dialogRef.destroy();
      this.uiDialogRefStoreService.dialogRefs.splice(index, 1);

      if (this.uiDialogRefStoreService.dialogRefs.length == 0) {
        renderer.removeStyle(this.document.body, 'overflow');
      }
    }
  }
}
