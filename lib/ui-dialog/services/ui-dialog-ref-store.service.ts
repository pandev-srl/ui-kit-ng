import { ComponentRef, Injectable } from '@angular/core';
import { UiDialogComponent } from '../components/ui-dialog/ui-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class UiDialogRefStoreService {
  readonly dialogRefs: (ComponentRef<UiDialogComponent> | null)[] = [];

  constructor() {}
}
