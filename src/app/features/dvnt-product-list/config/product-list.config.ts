import { CmsConfig } from '@spartacus/core';
import { LayoutConfig } from '@spartacus/storefront';
import { translationChunksConfig } from '@spartacus/assets';

import { DvntProductListComponent } from '../dvnt-product-list/dvnt-product-list.component';

export const productListLayoutConfig = {
  layoutSlots: {
    ProductListPageTemplate: {
      xs: {
        slots: ['ProductListSlot'],
      },
    },
  },
} as LayoutConfig;

export const productListCmsConfig = <CmsConfig>{
  cmsComponents: {
    CMSProductListComponent: {
      component: DvntProductListComponent,
    },
  },
};

const productListTranslationOverwrites = {
  en: {
    common: {
      productList: {
        filters: 'Filters',
        productsFound: 'Products found',
        sortBy: 'Sort By',
        view: 'View',
      },
    },
  },
};

export const productListTranslationsConfig = {
  i18n: {
    resources: productListTranslationOverwrites,
    chunks: {
      common: translationChunksConfig.common.push('productList'),
    },
  },
};
