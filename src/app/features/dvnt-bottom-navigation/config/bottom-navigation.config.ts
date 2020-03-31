import {
  CmsConfig,
  ContentSlotComponentData,
  CmsStructureConfig,
  CmsPageSlotsConfig,
} from '@spartacus/core';
import { LayoutConfig } from '@spartacus/storefront';

import { DvntBottomNavigationComponent } from '../dvnt-bottom-navigation.component';

export const bottomNavigationLayoutConfig = {
  layoutSlots: {
    header: {
      xs: {
        slots: ['DvntBottomNavigation'],
      },
    },
  },
} as LayoutConfig;

export const bottomNavigationCmsConfig = <CmsConfig>{
  cmsComponents: {
    DvntBottomNavigationComponent: {
      component: DvntBottomNavigationComponent,
    },
  },
};

export const staticComponents: {
  [key: string]: ContentSlotComponentData | any;
} = {
  DvntBottomNavigationComponent: {
    typeCode: 'DvntBottomNavigationComponent',
    flexType: 'DvntBottomNavigationComponent',
    uid: 'DvntBottomNavigationComponent',
  },
};

const cmsPageSlotConfig: CmsPageSlotsConfig = {
  DvntBottomNavigation: {
    componentIds: ['DvntBottomNavigationComponent'],
  },
};

export function cmsStructureConfig(): CmsStructureConfig {
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

const bottomNavigationTranslationOverwrites = {
  en: {
    common: {
      navigation: {
        cart: 'Cart',
        categories: 'Categories',
        home: 'Home',
        profile: 'Profile',
        search: 'Search',
      },
    },
  },
};

export const bottomNavigationTranslationsConfig = {
  i18n: { resources: bottomNavigationTranslationOverwrites },
};
