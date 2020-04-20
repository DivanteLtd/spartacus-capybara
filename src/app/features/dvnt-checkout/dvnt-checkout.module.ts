import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, FeaturesConfigModule } from '@spartacus/core';
import {
  CardModule,
  CartCouponModule,
  CartSharedModule,
  PAGE_LAYOUT_HANDLER,
  PromotionsModule,
  SpinnerModule,
} from '@spartacus/storefront';

import {
  checkoutCmsConfig,
  checkoutLayoutConfig,
  checkoutTranslationsConfig,
  staticCmsConfigFactory,
} from './config/checkout.config';
import { CheckoutReviewPageLayoutHandler } from './CheckoutReviewPageLayoutHandler';
import { DvntCheckoutOrderSummaryComponent } from './dvnt-order-summary/dvnt-checkout-order-summary.component';
import { DvntCheckoutProgressComponent } from './dvnt-checkout-progress/dvnt-checkout-progress.component';
import { DvntDeliveryModeComponent } from './dvnt-delivery-mode/dvnt-delivery-mode.component';
import { DvntOrderConfirmationModule } from './dvnt-order-confirmation/dvnt-order-confirmation.module';
import { DvntOrderReviewModule } from './dvnt-order-review/dvnt-order-review.module';
import { DvntPaymentMethodModule } from './dvnt-payment-method/dvnt-payment-method.module';
import { DvntSharedModule } from '../dvnt-shared/dvnt-shared.module';
import { DvntShippingAddressComponent } from './dvnt-shipping/dvnt-shipping-address.component';
import { SharedModule } from '../../shared/shared.module';

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
    CardModule,
    CartCouponModule,
    CartSharedModule,
    FeaturesConfigModule,
    SpinnerModule,
    PromotionsModule,
    DvntOrderConfirmationModule,
    DvntOrderReviewModule,
    DvntPaymentMethodModule,
    DvntSharedModule,
    ConfigModule.withConfig(checkoutTranslationsConfig),
    ConfigModule.withConfig(checkoutCmsConfig),
    ConfigModule.withConfig(checkoutLayoutConfig),
    ConfigModule.withConfigFactory(staticCmsConfigFactory),
  ],
  providers: [
    {
      provide: PAGE_LAYOUT_HANDLER,
      useExisting: CheckoutReviewPageLayoutHandler,
      multi: true,
    },
  ],
  entryComponents: [
    DvntShippingAddressComponent,
    DvntCheckoutProgressComponent,
    DvntCheckoutOrderSummaryComponent,
    DvntDeliveryModeComponent,
  ],
})
export class DvntCheckoutModule {}
