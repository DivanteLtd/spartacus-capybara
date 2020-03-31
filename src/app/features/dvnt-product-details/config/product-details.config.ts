import {
  CmsConfig,
  ContentSlotComponentData,
  CmsStructureConfig,
  CmsPageSlotsConfig,
} from '@spartacus/core';
import { LayoutConfig } from '@spartacus/storefront';

import { DvntProductDetailsComponent } from '../dvnt-product-details/dvnt-product-details.component';
import { DvntProductTabsComponent } from '../dvnt-product-tabs/dvnt-product-tabs.component';
import { DvntProductUpSellingReferencesComponent } from '../dvnt-product-up-selling-references/dvnt-product-up-selling-references.component';

export const productDetailsLayoutConfig = {
  layoutSlots: {
    ProductDetailsPageTemplate: {
      slots: ['DvntProductDetails', 'UpSelling'],
    },
  },
} as LayoutConfig;

export const productDetailsCmsConfig = <CmsConfig>{
  cmsComponents: {
    DvntProductDetailsComponent: {
      component: DvntProductDetailsComponent,
    },
    CMSTabParagraphContainer: {
      component: DvntProductTabsComponent,
    },
    ProductReferencesComponent: {
      component: DvntProductUpSellingReferencesComponent,
    },
  },
};

export const staticComponents: {
  [key: string]: ContentSlotComponentData | any;
} = {
  DvntProductDetailsComponent: {
    typeCode: 'DvntProductDetailsComponent',
    flexType: 'DvntProductDetailsComponent',
    uid: 'DvntProductDetailsComponent',
  },
};

const cmsPageSlotConfig: CmsPageSlotsConfig = {
  DvntProductDetails: {
    componentIds: ['DvntProductDetailsComponent'],
  },
};

export function productDetailsCmsStructureConfig(): CmsStructureConfig {
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

const productDetailsTranslationOverwrites = {
  en: {
    product: {
      productDetails: {
        quantity: 'Quantity',
      },
      productReview: {
        readAll: 'Read all {{count}} review',
      },
    },
  },
};

export const productDetailsTranslationsConfig = {
  i18n: { resources: productDetailsTranslationOverwrites },
};
