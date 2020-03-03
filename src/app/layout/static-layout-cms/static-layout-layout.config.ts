import { LayoutConfig } from '@spartacus/storefront';
import {
  CmsPageSlotsConfig,
  ContentSlotComponentData,
  CmsStructureConfig,
} from '@spartacus/core';

export const staticLayoutConfig: LayoutConfig = {
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

export const staticComponents: {
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

export const defaultStaticConfig: CmsPageSlotsConfig = {
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

export function defaultStaticCmsContentConfig(): CmsStructureConfig {
  return {
    cmsStructure: {
      components: {
        ...staticComponents,
      },
      slots: {
        ...defaultStaticConfig,
      },
    },
  };
}
