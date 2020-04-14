import {
  CmsConfig,
  ContentSlotComponentData,
  CmsStructureConfig,
} from '@spartacus/core';
import { LayoutConfig } from '@spartacus/storefront';

import { DvntForgotPasswordComponent } from '../dvnt-forgot-password/dvnt-forgot-password.component';
import { DvntLoginCustomerComponent } from '../dvnt-login-customer/dvnt-login-customer.component';
import { DvntMyInterestsComponent } from '../dvnt-my-interests/dvnt-my-interests.component';
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
    MyInterestsComponent: {
      component: DvntMyInterestsComponent,
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
  DvntMyInterestsComponent: {
    typeCode: 'DvntMyInterestsComponent',
    flexType: 'DvntMyInterestsComponent',
    uid: 'DvntMyInterestsComponent',
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
    myAccount: {
      myInterests: {
        sortBy: 'Sort By',
      },
    },
  },
};

export const accountTranslationsConfig = {
  i18n: { resources: accountTranslationOverwrites },
};
