import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvntPaymentMethodComponent } from './dvnt-payment-method.component';
import {
  BillingAddressFormModule,
  CardModule,
  PaymentFormModule,
  SpinnerModule,
} from '@spartacus/storefront';
import { DvntPaymentFormComponent } from './dvnt-payment-form/dvnt-payment-form.component';
import { SharedModule } from '../../../shared/shared.module';
import { DvntSharedModule } from '../../dvnt-shared/dvnt-shared.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [DvntPaymentMethodComponent, DvntPaymentFormComponent],
  imports: [
    CommonModule,
    PaymentFormModule,
    SharedModule,
    DvntSharedModule,
    NgSelectModule,
    CardModule,
    BillingAddressFormModule,
    SpinnerModule,
  ],
  exports: [DvntPaymentMethodComponent],
  entryComponents: [DvntPaymentMethodComponent, DvntPaymentFormComponent],
})
export class DvntPaymentMethodModule {}
