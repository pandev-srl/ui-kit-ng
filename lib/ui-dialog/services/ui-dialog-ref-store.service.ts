import { ComponentRef, Injectable } from '@angular/core';
import { UiDialogComponent } from '@/ui-kit';

@Injectable({
  providedIn: 'root',
})
export class UiDialogRefStoreService {
  readonly dialogRefs: (ComponentRef<UiDialogComponent> | null)[] = [];

  constructor() {}
}
