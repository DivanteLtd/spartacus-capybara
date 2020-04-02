import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvntShippingAddressComponent } from './dvnt-shipping/dvnt-shipping-address.component';
import {
  CmsPageConfig,
  CmsStructureConfig,
  ConfigModule,
  FeaturesConfigModule,
} from '@spartacus/core';
import { DvntCheckoutProgressComponent } from './dvnt-checkout-progress/dvnt-checkout-progress.component';
import {
  checkoutCmsConfig,
  checkoutLayoutConfig,
  checkoutTranslationsConfig,
  staticCmsonfig,
} from './config/checkout.config';
import { SharedModule } from '../../shared/shared.module';
import {
  AddressFormModule,
  CardModule,
  CartCouponModule,
  CartSharedModule,
  PAGE_LAYOUT_HANDLER,
  PromotionsModule,
  SpinnerModule,
} from '@spartacus/storefront';
import { DvntSharedModule } from '../dvnt-shared/dvnt-shared.module';
import { DvntCheckoutOrderSummaryComponent } from './dvnt-order-summary/dvnt-checkout-order-summary.component';
import { DvntDeliveryModeComponent } from './dvnt-delivery-mode/dvnt-delivery-mode.component';
import { DvntPaymentMethodModule } from './dvnt-payment-method/dvnt-payment-method.module';
import { DvntOrderReviewModule } from './dvnt-order-review/dvnt-order-review.module';
import { CheckoutReviewPageLayoutHandler } from './CheckoutReviewPageLayoutHandler';

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
    ConfigModule.withConfig(staticCmsonfig),
    CardModule,
    AddressFormModule,
    SpinnerModule,
    DvntSharedModule,
    CartCouponModule,
    FeaturesConfigModule,
    CartSharedModule,
    PromotionsModule,
    DvntPaymentMethodModule,
    DvntOrderReviewModule,
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
