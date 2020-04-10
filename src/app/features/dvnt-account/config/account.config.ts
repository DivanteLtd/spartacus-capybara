import {
  CmsConfig,
  ContentSlotComponentData,
  CmsStructureConfig,
} from '@spartacus/core';
import { LayoutConfig } from '@spartacus/storefront';

import { DvntForgotPasswordComponent } from '../dvnt-forgot-password/dvnt-forgot-password.component';
import { DvntLoginCustomerComponent } from '../dvnt-login-customer/dvnt-login-customer.component';
import { DvntOrderHistoryComponent } from '../dvnt-order-history/dvnt-order-history.component';
import { DvntRegisterCustomerComponent } from '../dvnt-register-customer/dvnt-register-customer.component';

export const accountLayoutConfig = {
  layoutSlots: {
    LoginPageTemplate: {
      slots: ['LeftContentSlot'],
    },
  },
} as LayoutConfig;

export const accountCmsConfig = <CmsConfig>{
  cmsComponents: {
    RegisterCustomerComponent: {
      component: DvntRegisterCustomerComponent,
    },
    ReturningCustomerLoginComponent: {
      component: DvntLoginCustomerComponent,
    },
    ForgotPasswordComponent: {
      component: DvntForgotPasswordComponent,
    },
    AccountOrderHistoryComponent: {
      component: DvntOrderHistoryComponent,
    },
  },
};

export const staticComponents: {
  [key: string]: ContentSlotComponentData | any;
} = {
  DvntRegisterCustomerComponent: {
    typeCode: 'DvntRegisterCustomerComponent',
    flexType: 'DvntRegisterCustomerComponent',
    uid: 'DvntRegisterCustomerComponent',
  },
  DvntLoginCustomerComponent: {
    typeCode: 'DvntLoginCustomerComponent',
    flexType: 'DvntLoginCustomerComponent',
    uid: 'DvntLoginCustomerComponent',
  },
  DvntForgotPasswordComponent: {
    typeCode: 'DvntForgotPasswordComponent',
    flexType: 'DvntForgotPasswordComponent',
    uid: 'DvntForgotPasswordComponent',
  },
  DvntOrderHistoryComponent: {
    typeCode: 'DvntOrderHistoryComponent',
    flexType: 'DvntOrderHistoryComponent',
    uid: 'DvntOrderHistoryComponent',
  },
};

export function cmsStructureConfig(): CmsStructureConfig {
  return {
    cmsStructure: {
      components: {
        ...staticComponents,
      },
    },
  };
}

const accountTranslationOverwrites = {
  en: {
    user: {
      register: {
        registerTerms:
          'I want to create an account and I am confirming that I have read and agreed with the',
      },
    },
  },
};

export const accountTranslationsConfig = {
  i18n: { resources: accountTranslationOverwrites },
};
