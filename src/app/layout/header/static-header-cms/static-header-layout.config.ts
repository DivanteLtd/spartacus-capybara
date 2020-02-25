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
          //   'SiteLinks',
          'CustomSiteLogo',
          'NavigationBar',
          'SearchBox',
          'CustomSiteLogin',
          'CustomWishListIcon',
          'MiniCart',
        ],
      },
      xs: {
        slots: ['PreHeader', 'CustomSiteLogo', 'SearchBox', 'MiniCart'],
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
};

export function defaultCmsContentConfig(): CmsStructureConfig {
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
