import { CmsConfig } from '@spartacus/core';
import { DvntShippingAddressComponent } from '../dvnt-shipping/dvnt-shipping-address.component';
import {
  CartNotEmptyGuard,
  CheckoutAuthGuard,
  CheckoutDetailsLoadedGuard,
  DeliveryModeSetGuard,
  LayoutConfig,
  ShippingAddressSetGuard,
} from '@spartacus/storefront';
import { DvntCheckoutProgressComponent } from '../dvnt-checkout-progress/dvnt-checkout-progress.component';
import { DvntCheckoutOrderSummaryComponent } from '../dvnt-order-summary/dvnt-checkout-order-summary.component';
import { DvntDeliveryModeComponent } from '../dvnt-delivery-mode/dvnt-delivery-mode.component';
import { DvntPaymentMethodComponent } from '../dvnt-payment-method/dvnt-payment-method.component';

export const checkoutLayoutConfig = {
  layoutSlots: {
    MultiStepCheckoutSummaryPageTemplate: {
      xs: {
        slots: ['TopContent', 'BodyContent'],
      },
      md: {
        slots: ['TopContent', 'BodyContent', 'SideContent'],
      },
    },
  },
} as LayoutConfig;

export const checkoutCmsConfig = <CmsConfig>{
  cmsComponents: {
    CheckoutShippingAddress: {
      component: DvntShippingAddressComponent,
      guards: [
        CheckoutAuthGuard,
        CartNotEmptyGuard,
        CheckoutDetailsLoadedGuard,
      ],
    },
    CheckoutDeliveryMode: {
      component: DvntDeliveryModeComponent,
      guards: [CheckoutAuthGuard, CartNotEmptyGuard, ShippingAddressSetGuard],
    },
    CheckoutPaymentDetails: {
      component: DvntPaymentMethodComponent,
      guards: [
        CheckoutAuthGuard,
        CartNotEmptyGuard,
        ShippingAddressSetGuard,
        DeliveryModeSetGuard,
      ],
    },
    CheckoutProgress: {
      component: DvntCheckoutProgressComponent,
    },
    CheckoutProgressMobileTop: null,
    CheckoutProgressMobileBottom: null,
    CheckoutOrderSummary: {
      component: DvntCheckoutOrderSummaryComponent,
    },
  },
};

const checkoutTranslationOverwrites = {
  en: {
    cart: {
      cartItems: {
        totalItems: 'Total items',
        ssfProducts: 'Products',
      },
      orderCost: {
        subtotalStandalone: 'Subtotal',
        shipping: 'Shipping',
        tax: 'Tax',
      },
      voucher: {
        ssfDiscountCode: 'Discount',
      },
    },
  },
};

export const checkoutTranslationsConfig = {
  i18n: {
    resources: checkoutTranslationOverwrites,
  },
};
