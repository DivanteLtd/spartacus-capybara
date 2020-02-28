import { LayoutConfig } from '@spartacus/storefront';
import {
  CmsPageSlotsConfig,
  ContentSlotComponentData,
  CmsStructureConfig,
} from '@spartacus/core';

export const staticHeaderLayoutConfig: LayoutConfig = {
  layoutSlots: {
    topBar: {
      slots: ['SiteContext'],
    },
    header: {
      md: {
        slots: [
          'PreHeader',
          'CustomSiteLogo',
          'NavigationBar',
          'SearchBox',
          'CustomSiteLogin',
          'CustomWishListIcon',
          'CustomMiniCart',
        ],
      },
      xs: {
        slots: ['PreHeader', 'CustomSiteLogo', 'SearchBox', 'CustomMiniCart'],
      },
    },
  },
};

export const staticHeaderComponents: {
  [key: string]: ContentSlotComponentData | any;
} = {
  StaticHeaderLogoComponent: {
    typeCode: 'StaticHeaderLogoComponent',
    flexType: 'StaticHeaderLogoComponent',
    uid: 'StaticHeaderLogoComponent',
  },
  CustomLoginComponent: {
    typeCode: 'CustomLoginComponent',
    flexType: 'CustomLoginComponent',
    uid: 'CustomLoginComponent',
  },
  CustomWishListIconComponent: {
    typeCode: 'CustomWishListIconComponent',
    flexType: 'CustomWishListIconComponent',
    uid: 'CustomWishListIconComponent',
  },
  CustomMiniCartComponent: {
    typeCode: 'CustomMiniCartComponent',
    flexType: 'CustomMiniCartComponent',
    uid: 'CustomMiniCartComponent',
  },
};

export const defaultStaticHeaderConfig: CmsPageSlotsConfig = {
  CustomSiteLogo: {
    componentIds: ['StaticHeaderLogoComponent'],
  },
  CustomSiteLogin: {
    componentIds: ['CustomLoginComponent'],
  },
  CustomWishListIcon: {
    componentIds: ['CustomWishListIconComponent'],
  },
  CustomMiniCart: {
    componentIds: ['CustomMiniCartComponent'],
  },
};

export function defaultHeaderCmsContentConfig(): CmsStructureConfig {
  return {
    cmsStructure: {
      components: {
        ...staticHeaderComponents,
      },
      slots: {
        ...defaultStaticHeaderConfig,
      },
    },
  };
}
