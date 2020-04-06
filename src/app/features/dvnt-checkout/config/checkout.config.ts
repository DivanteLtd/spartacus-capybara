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
  OrderConfirmationGuard,
  PaymentDetailsSetGuard,
  ShippingAddressSetGuard,
} from '@spartacus/storefront';
import { DvntCheckoutProgressComponent } from '../dvnt-checkout-progress/dvnt-checkout-progress.component';
import { DvntCheckoutOrderSummaryComponent } from '../dvnt-order-summary/dvnt-checkout-order-summary.component';
import { DvntDeliveryModeComponent } from '../dvnt-delivery-mode/dvnt-delivery-mode.component';
import { DvntPaymentMethodComponent } from '../dvnt-payment-method/dvnt-payment-method.component';
import { DvntOrderReviewComponent } from '../dvnt-order-review/dvnt-order-review/dvnt-order-review.component';
import { DvntOrderConfirmationComponent } from '../dvnt-order-confirmation/dvnt-order-confirmation/dvnt-order-confirmation.component';
import { DvntReviewOrderComponent } from '../dvnt-order-review/dvnt-review-order/dvnt-review-order.component';

export const CHECKOUT_REVIEW_ORDER_PATH = '/checkout/review-order';

export const checkoutSkipSlots = ['BodyContent', 'SideContent'];

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
    OrderConfirmationThankMessageComponent: {
      component: DvntOrderConfirmationComponent,
      guards: [OrderConfirmationGuard],
    },
    CheckoutProgress: {
      component: DvntCheckoutProgressComponent,
    },
    OrderConfirmationItemsComponent: {
      component: null,
    },
    OrderConfirmationTotalsComponent: {
      component: null,
    },
    OrderConfirmationOverviewComponent: {
      component: null,
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
      checkoutOrderConfirmation: {
        backToShop: 'Back to shop',
        ssfOrderConfirmText: `It's ordered!`,
        ssfOrderNo: 'Order No.',
        ssfOrderSuccessLabel: 'You’ve successfully placed the order.',
        ssfOrderSuccessText:
          // tslint:disable-next-line:max-line-length
          'You can check status of your order by using our delivery status feature. You will receive an order confirmation e-mail with details of your order and a link to track its progress.',
        ssfYourAccount: 'Your Account',
        ssfYourAccountText:
          // tslint:disable-next-line:max-line-length
          'You can log to your account using e-mail and password defined earlier. On your account you can edit your profile data, check history of transactions, edit subscription to newsletter.',
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

export function staticCmsConfigFactory(): CmsStructureConfig {
  return {
    cmsStructure: {
      components: {
        ...staticComponents,
      },
      pages: staticPages,
    },
  };
}
