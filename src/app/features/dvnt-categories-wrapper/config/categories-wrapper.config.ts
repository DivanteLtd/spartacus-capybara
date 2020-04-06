import {
  CmsConfig,
  ContentSlotComponentData,
  CmsStructureConfig,
  CmsPageSlotsConfig,
} from '@spartacus/core';
import { translationChunksConfig } from '@spartacus/assets';
import { LayoutConfig } from '@spartacus/storefront';

import { DvntCategoriesWrapperComponent } from '../dvnt-categories-wrapper.component';

export const categoriesWrapperLayoutConfig = {
  layoutSlots: {
    ProductListPageTemplate: {
      md: {
        slots: ['DvntCategoriesWrapper', 'ProductListSlot'],
      },
    },
  },
} as LayoutConfig;

export const categoriesWrapperCmsConfig = <CmsConfig>{
  cmsComponents: {
    DvntCategoriesWrapperComponent: {
      component: DvntCategoriesWrapperComponent,
    },
  },
};

export const staticComponents: {
  [key: string]: ContentSlotComponentData | any;
} = {
  DvntCategoriesWrapperComponent: {
    typeCode: 'DvntCategoriesWrapperComponent',
    flexType: 'DvntCategoriesWrapperComponent',
    uid: 'DvntCategoriesWrapperComponent',
  },
};

const cmsPageSlotConfig: CmsPageSlotsConfig = {
  DvntCategoriesWrapper: {
    componentIds: ['DvntCategoriesWrapperComponent'],
  },
};
export function categoriesWrapperCmsStructureConfig(): CmsStructureConfig {
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

const categoriesWrapperTranslationOverwrites = {
  en: {
    common: {
      productList: {
        categories: 'Categories',
      },
    },
  },
};

export const categoriesWrapperTranslationsConfig = {
  i18n: {
    resources: categoriesWrapperTranslationOverwrites,
    chunks: {
      common: translationChunksConfig.common.push('productList'),
    },
  },
};
