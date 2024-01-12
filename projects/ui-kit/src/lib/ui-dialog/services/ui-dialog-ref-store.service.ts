import { Injectable } from '@angular/core';
import { UiDialogRef } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UiDialogRefStoreService {
  readonly dialogRefs: UiDialogRef<any>[] = [];

  constructor() {}

  getById(id: string): UiDialogRef<any> | null {
    return this.dialogRefs.find((el) => el.id == id) || null;
  }
}
