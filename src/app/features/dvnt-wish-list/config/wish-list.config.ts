import {
  CmsConfig,
  ContentSlotComponentData,
  CmsPageSlotsConfig,
  CmsStructureConfig,
} from '@spartacus/core';

import { DvntWishListComponent } from '../dvnt-wish-list.component';

export const wishListCmsConfig = <CmsConfig>{
  cmsComponents: {
    WishListComponent: {
      component: DvntWishListComponent,
    },
  },
};

export const staticComponents: {
  [key: string]: ContentSlotComponentData | any;
} = {
  DvntWishListComponent: {
    typeCode: 'DvntWishListComponent',
    flexType: 'DvntWishListComponent',
    uid: 'DvntWishListComponent',
  },
};

const cmsPageSlotConfig: CmsPageSlotsConfig = {
  DvntWishList: {
    componentIds: ['DvntWishListComponent'],
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

const wishTranslationOverwrites = {
  en: {
    myAccount: {
      wishlist: {
        header: 'Wish list',
        action: 'Action',
        itemPrice: 'Item price',
        productName: 'Product name',
        remove: 'Remove',
        addToCart: 'Add to cart',
      },
    },
  },
};

export const wishTranslationsConfig = {
  i18n: { resources: wishTranslationOverwrites },
};
