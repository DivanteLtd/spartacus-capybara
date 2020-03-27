import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ConfigModule,
  CmsStructureConfig,
  CmsConfig,
  ContentSlotComponentData,
  CmsPageSlotsConfig,
  I18nModule,
  UrlModule,
} from '@spartacus/core';
import { MediaModule } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';

import { DvntWishListComponent } from './dvnt-wish-list.component';
import { DvntWishListItemComponent } from './dvnt-wish-list-item/dvnt-wish-list-item.component';

@NgModule({
  declarations: [DvntWishListComponent, DvntWishListItemComponent],
  imports: [
    CommonModule,
    I18nModule,
    MediaModule,
    RouterModule,
    UrlModule,
    ConfigModule.withConfigFactory(cmsStructureConfig),
    ConfigModule.withConfig({
      cmsComponents: {
        WishListComponent: {
          component: DvntWishListComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [DvntWishListComponent],
})
export class DvntWishListModule {}

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
