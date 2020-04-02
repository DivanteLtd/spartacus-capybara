import { Component, OnInit } from '@angular/core';
import { CheckoutOrderSummaryComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-dvnt-review-order',
  templateUrl: './dvnt-review-order.component.html',
  styleUrls: ['./dvnt-review-order.component.scss'],
})
export class DvntReviewOrderComponent extends CheckoutOrderSummaryComponent {}
