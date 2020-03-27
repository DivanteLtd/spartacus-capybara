import { CmsConfig } from '@spartacus/core';
import { DvntShippingAddressComponent } from '../dvnt-shipping/dvnt-shipping-address.component';
import {
  CartNotEmptyGuard,
  CheckoutAuthGuard,
  CheckoutDetailsLoadedGuard,
  LayoutConfig,
} from '@spartacus/storefront';
import { DvntCheckoutProgressComponent } from '../dvnt-checkout-progress/dvnt-checkout-progress.component';
import { DvntCheckoutOrderSummaryComponent } from '../dvnt-order-summary/dvnt-checkout-order-summary.component';

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

const translationOverwrites = {
  en: {
    cart: {
      cartItems: {
        totalItems: 'Total items',
      },
      orderCost: {
        subtotalStandalone: 'Subtotal',
        shipping: 'Shipping',
        tax: 'Tax',
      },
    },
  },
};

export const translationsConfig = {
  i18n: { resources: translationOverwrites },
};
