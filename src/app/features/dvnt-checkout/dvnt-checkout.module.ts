import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvntShippingAddressComponent } from './dvnt-shipping/dvnt-shipping-address.component';
import { ConfigModule, FeaturesConfigModule } from '@spartacus/core';
import { DvntCheckoutProgressComponent } from './dvnt-checkout-progress/dvnt-checkout-progress.component';
import {
  checkoutCmsConfig,
  checkoutLayoutConfig,
  checkoutTranslationsConfig,
} from './config/checkout.config';
import { SharedModule } from '../../shared/shared.module';
import {
  AddressFormModule,
  CardModule,
  CartCouponModule,
  CartSharedModule,
  PromotionsModule,
  SpinnerModule,
} from '@spartacus/storefront';
import { DvntSharedModule } from '../dvnt-shared/dvnt-shared.module';
import { DvntCheckoutOrderSummaryComponent } from './dvnt-order-summary/dvnt-checkout-order-summary.component';
import { DvntDeliveryModeComponent } from './dvnt-delivery-mode/dvnt-delivery-mode.component';

@NgModule({
  declarations: [
    DvntShippingAddressComponent,
    DvntCheckoutProgressComponent,
    DvntCheckoutOrderSummaryComponent,
    DvntDeliveryModeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ConfigModule.withConfig(checkoutTranslationsConfig),
    ConfigModule.withConfig(checkoutCmsConfig),
    ConfigModule.withConfig(checkoutLayoutConfig),
    CardModule,
    AddressFormModule,
    SpinnerModule,
    DvntSharedModule,
    CartCouponModule,
    FeaturesConfigModule,
    CartSharedModule,
    PromotionsModule,
  ],
  entryComponents: [
    DvntShippingAddressComponent,
    DvntCheckoutProgressComponent,
    DvntCheckoutOrderSummaryComponent,
    DvntDeliveryModeComponent,
  ],
})
export class DvntCheckoutModule {}
