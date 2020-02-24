import { LayoutConfig } from '@spartacus/storefront';
import {
  CmsPageSlotsConfig,
  ContentSlotComponentData,
  CmsStructureConfig,
} from '@spartacus/core';

export const staticHeaderLayoutConfig: LayoutConfig = {
  layoutSlots: {
    header: {
      md: {
        slots: [
          'PreHeader',
          'SiteContext',
          //   'SiteLinks',
          'SiteLogo',
          'NavigationBar',
          'SearchBox',
          'SiteLogin',
          'MiniCart',
        ],
      },
      xs: {
        slots: ['PreHeader', 'SiteLogo', 'SearchBox', 'MiniCart'],
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
  SiteLogo: {
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
