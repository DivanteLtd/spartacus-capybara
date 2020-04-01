import { Component, OnInit } from '@angular/core';
import { PaymentMethodComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-dvnt-payment-method',
  templateUrl: './dvnt-payment-method.component.html',
  styleUrls: ['./dvnt-payment-method.component.scss'],
})
export class DvntPaymentMethodComponent extends PaymentMethodComponent {}
