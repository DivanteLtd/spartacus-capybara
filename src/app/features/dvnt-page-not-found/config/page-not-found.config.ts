import {
  CmsConfig,
  ContentSlotComponentData,
  CmsStructureConfig,
  CmsPageSlotsConfig,
} from '@spartacus/core';
import { LayoutConfig } from '@spartacus/storefront';

import { DvntPageNotFoundComponent } from '../dvnt-page-not-found.component';

export const pageNotFoundLayoutConfig = {
  layoutSlots: {
    ErrorPageTemplate: {
      slots: ['PageNotFound'],
    },
  },
} as LayoutConfig;

export const pageNotFoundCmsConfig = <CmsConfig>{
  cmsComponents: {
    DvntPageNotFoundComponent: {
      component: DvntPageNotFoundComponent,
    },
  },
};

export const staticComponents: {
  [key: string]: ContentSlotComponentData | any;
} = {
  DvntPageNotFoundComponent: {
    typeCode: 'DvntPageNotFoundComponent',
    flexType: 'DvntPageNotFoundComponent',
    uid: 'DvntPageNotFoundComponent',
  },
};

const cmsPageSlotConfig: CmsPageSlotsConfig = {
  PageNotFound: {
    componentIds: ['DvntPageNotFoundComponent'],
  },
};
export function pageNotFoundCmsStructureConfig(): CmsStructureConfig {
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

const pageNotFoundTranslationOverwrites = {
  en: {
    common: {
      common: {
        back: 'Back',
        returnToHome: 'Return to home',
        pageNotFoundSlogan: `Unfortunately we can't find the page you are looking for.`,
        pageNotFoundTitle: `We can't find the page`,
      },
    },
  },
};

export const pageNotFoundTranslationsConfig = {
  i18n: {
    resources: pageNotFoundTranslationOverwrites,
  },
};
