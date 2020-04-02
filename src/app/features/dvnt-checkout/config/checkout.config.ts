import {
  CmsConfig,
  CmsPageConfig,
  CmsStructureConfig,
  ContentSlotComponentData,
} from '@spartacus/core';
import { DvntShippingAddressComponent } from '../dvnt-shipping/dvnt-shipping-address.component';
import {
  CartNotEmptyGuard,
  CheckoutAuthGuard,
  CheckoutDetailsLoadedGuard,
  DeliveryModeSetGuard,
  LayoutConfig,
  PaymentDetailsSetGuard,
  ShippingAddressSetGuard,
} from '@spartacus/storefront';
import { DvntCheckoutProgressComponent } from '../dvnt-checkout-progress/dvnt-checkout-progress.component';
import { DvntCheckoutOrderSummaryComponent } from '../dvnt-order-summary/dvnt-checkout-order-summary.component';
import { DvntDeliveryModeComponent } from '../dvnt-delivery-mode/dvnt-delivery-mode.component';
import { DvntPaymentMethodComponent } from '../dvnt-payment-method/dvnt-payment-method.component';
import { DvntOrderReviewComponent } from '../dvnt-order-review/dvnt-order-review/dvnt-order-review.component';
import { DvntReviewOrderComponent } from '../dvnt-order-review/dvnt-review-order/dvnt-review-order.component';

export const CHECKOUT_REVIEW_ORDER_PATH = '/checkout/review-order';

export const checkoutReviewSlots = [
  'TopContent',
  'DvntBodyContent',
  'DvntSideContent',
  'BottomContent',
];

export const checkoutLayoutConfig = {
  layoutSlots: {
    MultiStepCheckoutSummaryPageTemplate: {
      slots: [
        'TopContent',
        'BodyContent',
        'SideContent',
        'DvntBodyContent',
        'DvntSideContent',
        'BottomContent',
      ],
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
    CheckoutReviewOrder: {
      component: DvntOrderReviewComponent,
      guards: [
        CheckoutAuthGuard,
        CartNotEmptyGuard,
        ShippingAddressSetGuard,
        DeliveryModeSetGuard,
        PaymentDetailsSetGuard,
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
    DvntReviewOrder: {
      component: DvntReviewOrderComponent,
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
    checkout: {
      checkoutReview: {
        orderReview: 'Order review',
        payment: 'Payment',
        orderDetails: 'Order details',
      },
    },
  },
};

export const checkoutTranslationsConfig = {
  i18n: {
    resources: checkoutTranslationOverwrites,
  },
};

export const staticPages: CmsPageConfig[] = [
  {
    ignoreBackend: false,
    pageId: '/checkout/review-order',
    template: 'MultiStepCheckoutSummaryPageTemplate',
    slots: {
      DvntBodyContent: {
        componentIds: ['CheckoutProgress', 'DvntReviewOrder'],
      },
      DvntSideContent: {
        componentIds: ['CheckoutReviewOrder'],
      },
    },
  },
];

export const staticComponents: {
  [key: string]: ContentSlotComponentData | any;
} = {
  CheckoutOrderSummary: {
    uid: 'CheckoutOrderSummaryComponent',
    flexType: 'CheckoutOrderSummary',
    typeCode: 'CMSFlexComponent',
  },
  CheckoutReviewOrder: {
    uid: 'CheckoutReviewOrderComponent',
    flexType: 'CheckoutReviewOrder',
    typeCode: 'CMSFlexComponent',
  },
  CheckoutProgress: {
    uid: 'CheckoutProgressComponent',
    flexType: 'CheckoutProgress',
    typeCode: 'CMSFlexComponent',
  },
  DvntReviewOrder: {
    uid: 'DvntReviewOrderComponent',
    flexType: 'DvntReviewOrder',
    typeCode: 'CMSFlexComponent',
  },
};

export const staticCmsonfig: CmsStructureConfig = {
  cmsStructure: {
    components: {
      ...staticComponents,
    },
    slots: {},
    pages: staticPages,
  },
};
