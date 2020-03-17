import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageSlotModule } from '@spartacus/storefront';
import {
  UrlModule,
  I18nModule,
  ContentSlotComponentData,
  CmsPageSlotsConfig,
  CmsStructureConfig,
  ConfigModule,
  CmsConfig,
} from '@spartacus/core';

import { DvntHeaderLogoComponent } from './dvnt-header-logo/dvnt-header-logo.component';
import { DvntLoginComponent } from './dvnt-login/dvnt-login.component';
import { DvntMiniCartComponent } from './dvnt-mini-cart/dvnt-mini-cart.component';
import { DvntWishListIconComponent } from './dvnt-wish-list-icon/dvnt-wish-list-icon.component';

@NgModule({
  declarations: [
    DvntHeaderLogoComponent,
    DvntLoginComponent,
    DvntMiniCartComponent,
    DvntWishListIconComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    // SPRATACUS
    I18nModule,
    PageSlotModule,
    UrlModule,
    ConfigModule.withConfigFactory(cmsStructureConfig),
    ConfigModule.withConfig({
      cmsComponents: {
        DvntHeaderLogoComponent: {
          component: DvntHeaderLogoComponent,
        },
        DvntLoginComponent: {
          component: DvntLoginComponent,
        },
        DvntWishListIconComponent: {
          component: DvntWishListIconComponent,
        },
        DvntMiniCartComponent: {
          component: DvntMiniCartComponent,
        },
      },
    } as CmsConfig),
    ConfigModule.withConfig({
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
              'DvntSiteLogo',
              'NavigationBar',
              'SearchBox',
              'DvntSiteLogin',
              'DvntWishListIcon',
              'DvntMiniCart',
            ],
          },
        },
      },
    }),
  ],
  entryComponents: [
    DvntHeaderLogoComponent,
    DvntLoginComponent,
    DvntMiniCartComponent,
    DvntWishListIconComponent,
  ],
})
export class DvntHeaderModule {}

export const staticComponents: {
  [key: string]: ContentSlotComponentData | any;
} = {
  DvntHeaderLogoComponent: {
    typeCode: 'DvntHeaderLogoComponent',
    flexType: 'DvntHeaderLogoComponent',
    uid: 'DvntHeaderLogoComponent',
  },
  DvntLoginComponent: {
    typeCode: 'DvntLoginComponent',
    flexType: 'DvntLoginComponent',
    uid: 'DvntLoginComponent',
  },
  DvntWishListIconComponent: {
    typeCode: 'DvntWishListIconComponent',
    flexType: 'DvntWishListIconComponent',
    uid: 'DvntWishListIconComponent',
  },
  DvntMiniCartComponent: {
    typeCode: 'DvntMiniCartComponent',
    flexType: 'DvntMiniCartComponent',
    uid: 'DvntMiniCartComponent',
  },
};

const cmsPageSlotConfig: CmsPageSlotsConfig = {
  DvntSiteLogo: {
    componentIds: ['DvntHeaderLogoComponent'],
  },
  DvntSiteLogin: {
    componentIds: ['DvntLoginComponent'],
  },
  DvntWishListIcon: {
    componentIds: ['DvntWishListIconComponent'],
  },
  DvntMiniCart: {
    componentIds: ['DvntMiniCartComponent'],
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
