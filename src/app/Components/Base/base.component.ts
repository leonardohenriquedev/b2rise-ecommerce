import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  template: '',
})
export class BaseComponent implements OnDestroy {
  private unsub$ = new Subject();

  unsubOnDestroy() {
    return <T>(observable: Observable<T>): Observable<T> =>
      observable.pipe(takeUntil(this.unsub$));
  }

  ngOnDestroy(): void {
    this.unsub$.next(true);
    this.unsub$.complete();
  }
}
