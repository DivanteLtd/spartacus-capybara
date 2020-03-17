import { LayoutConfig } from '@spartacus/storefront';
import {
  CmsPageSlotsConfig,
  ContentSlotComponentData,
  CmsStructureConfig,
} from '@spartacus/core';

export const staticLayoutConfig: LayoutConfig = {
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
          'CustomSiteLogo',
          'NavigationBar',
          'SearchBox',
          'CustomSiteLogin',
          'CustomWishListIcon',
          'CustomMiniCart',
        ],
      },
      xs: {
        slots: ['BottomNavigation'],
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
  BottomNavigationComponent: {
    typeCode: 'BottomNavigationComponent',
    flexType: 'BottomNavigationComponent',
    uid: 'BottomNavigationComponent',
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
  BottomNavigation: {
    componentIds: ['BottomNavigationComponent'],
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
