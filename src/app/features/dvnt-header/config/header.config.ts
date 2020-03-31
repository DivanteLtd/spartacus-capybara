import {
  CmsConfig,
  ContentSlotComponentData,
  CmsStructureConfig,
  CmsPageSlotsConfig,
} from '@spartacus/core';
import { LayoutConfig } from '@spartacus/storefront';
import { DvntHeaderLogoComponent } from '../dvnt-header-logo/dvnt-header-logo.component';
import { DvntLoginComponent } from '../dvnt-login/dvnt-login.component';
import { DvntWishListIconComponent } from '../dvnt-wish-list-icon/dvnt-wish-list-icon.component';
import { DvntMiniCartComponent } from '../dvnt-mini-cart/dvnt-mini-cart.component';

export const headerLayoutConfig = {
  layoutSlots: {
    topBar: {
      md: {
        slots: ['SiteContext'],
      },
    },
    header: {
      md: {
        slots: [
          'PreHeader',
          'DvntSiteLogo',
          'NavigationBar',
          'SearchBox',
          'DvntSiteLogin',
          'DvntWishListIcon',
          'DvntMiniCart',
        ],
      },
    },
  },
} as LayoutConfig;

export const headerCmsConfig = <CmsConfig>{
  cmsComponents: {
    DvntHeaderLogoComponent: {
      component: DvntHeaderLogoComponent,
    },
    DvntLoginComponent: {
      component: DvntLoginComponent,
    },
    DvntWishListIconComponent: {
      component: DvntWishListIconComponent,
    },
    DvntMiniCartComponent: {
      component: DvntMiniCartComponent,
    },
  },
};

export const staticComponents: {
  [key: string]: ContentSlotComponentData | any;
} = {
  DvntHeaderLogoComponent: {
    typeCode: 'DvntHeaderLogoComponent',
    flexType: 'DvntHeaderLogoComponent',
    uid: 'DvntHeaderLogoComponent',
  },
  DvntLoginComponent: {
    typeCode: 'DvntLoginComponent',
    flexType: 'DvntLoginComponent',
    uid: 'DvntLoginComponent',
  },
  DvntWishListIconComponent: {
    typeCode: 'DvntWishListIconComponent',
    flexType: 'DvntWishListIconComponent',
    uid: 'DvntWishListIconComponent',
  },
  DvntMiniCartComponent: {
    typeCode: 'DvntMiniCartComponent',
    flexType: 'DvntMiniCartComponent',
    uid: 'DvntMiniCartComponent',
  },
};

const cmsPageSlotConfig: CmsPageSlotsConfig = {
  DvntSiteLogo: {
    componentIds: ['DvntHeaderLogoComponent'],
  },
  DvntSiteLogin: {
    componentIds: ['DvntLoginComponent'],
  },
  DvntWishListIcon: {
    componentIds: ['DvntWishListIconComponent'],
  },
  DvntMiniCart: {
    componentIds: ['DvntMiniCartComponent'],
  },
};
export function headerCmsStructureConfig(): CmsStructureConfig {
  return {
    cmsStructure: {
      components: {
        ...staticComponents,
      },
      slots: {
        ...cmsPageSlotConfig,
      },
    },
  };
}
