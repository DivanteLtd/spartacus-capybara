import { Component } from '@angular/core';
import { OrderConfirmationThankYouMessageComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-dvnt-order-confirmation',
  templateUrl: './dvnt-order-confirmation.component.html',
  styleUrls: ['./dvnt-order-confirmation.component.scss'],
})
export class DvntOrderConfirmationComponent extends OrderConfirmationThankYouMessageComponent {}
