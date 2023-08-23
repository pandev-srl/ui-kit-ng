import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable()
export class SubscriptionManagerService {
  private subs: Subscription[] = [];

  constructor() {}

  push(sub: Subscription | null | undefined): void {
    if (sub) {
      this.subs.push(sub);
    }
  }

  unsubscribeAll(): void {
    this.subs.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
