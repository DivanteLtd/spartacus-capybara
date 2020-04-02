import { Injectable } from '@angular/core';
import { BREAKPOINT, PageLayoutHandler } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import {
  CHECKOUT_REVIEW_ORDER_PATH,
  checkoutReviewSlots,
} from './config/checkout.config';

@Injectable({
  providedIn: 'root',
})
export class CheckoutReviewPageLayoutHandler implements PageLayoutHandler {
  constructor(private router: Router) {}

  handle(
    slots: Observable<string[]>,
    pageTemplate?: string,
    section?: string,
    breakpoint?: BREAKPOINT
  ): Observable<string[]> {
    return slots.pipe(
      map((_slots: string[]) => {
        if (this.isCheckoutReviewRoute()) {
          return this.filterCheckoutSlots(_slots);
        } else {
          return _slots;
        }
      })
    );
  }

  filterCheckoutSlots(slots: string[]) {
    return slots.filter((slot) => checkoutReviewSlots.includes(slot));
  }

  isCheckoutReviewRoute() {
    return this.router.url === CHECKOUT_REVIEW_ORDER_PATH;
  }
}
