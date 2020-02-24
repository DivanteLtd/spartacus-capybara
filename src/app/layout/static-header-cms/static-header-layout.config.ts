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
          'SiteLogin',
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
};

export const defaultStaticHeaderConfig: CmsPageSlotsConfig = {
  CustomSiteLogo: {
    componentIds: ['StaticHeaderLogoComponent'],
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
