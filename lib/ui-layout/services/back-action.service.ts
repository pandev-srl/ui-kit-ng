import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackActionService {
  private readonly _backPressed$ = new Subject<void>();
  private readonly _visible$ = new BehaviorSubject<boolean>(false);
  readonly visible$: Observable<boolean> = this._visible$;

  private backSubscription: Subscription | null = null;

  setBackAction(fn: () => void): void {
    if (this.backSubscription) {
      throw new Error('Back action already set. Unset it before setting another');
    }

    this.backSubscription = this._backPressed$.subscribe(fn);
    this._visible$.next(true);
  }

  unsetBackAction(): void {
    this._visible$.next(false);
    this.backSubscription?.unsubscribe();
    this.backSubscription = null;
  }

  onBackPressed(): void {
    this._backPressed$.next();
  }
}
