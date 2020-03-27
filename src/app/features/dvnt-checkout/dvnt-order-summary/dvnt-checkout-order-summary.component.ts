import { Component } from '@angular/core';
import { CheckoutOrderSummaryComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-dvnt-checkout-order-summary',
  templateUrl: './dvnt-checkout-order-summary.component.html',
  styleUrls: ['./dvnt-checkout-order-summary.component.scss'],
})
export class DvntCheckoutOrderSummaryComponent extends CheckoutOrderSummaryComponent {
  showProductsInCart: boolean;
  showCouponForm: boolean;
}
