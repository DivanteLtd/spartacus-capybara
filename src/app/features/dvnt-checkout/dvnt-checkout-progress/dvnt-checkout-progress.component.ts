import { Component, OnInit } from '@angular/core';
import { CheckoutProgressComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-dvnt-checkout-progress',
  templateUrl: './dvnt-checkout-progress.component.html',
  styleUrls: ['./dvnt-checkout-progress.component.scss'],
})
export class DvntCheckoutProgressComponent extends CheckoutProgressComponent {}
