import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  I18nModule,
  UrlModule,
  CmsStructureConfig,
  CmsPageSlotsConfig,
  ContentSlotComponentData,
  ConfigModule,
  CmsConfig,
} from '@spartacus/core';
import {
  StarRatingModule,
  ItemCounterModule,
  CartComponentModule,
  MediaModule,
  OutletModule,
  PageComponentModule,
} from '@spartacus/storefront';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { DvntAddProductToCartComponent } from './dvnt-add-product-to-cart/dvnt-add-product-to-cart.component';
import { DvntCarouselModule } from 'src/app/shared/carousel/dvnt-carousel.module';
import { DvntProductDetailsComponent } from './dvnt-product-details/dvnt-product-details.component';
import { DvntProductImagesComponent } from './dvnt-product-images/dvnt-product-images.component';
import { DvntProductIntroComponent } from './dvnt-product-intro/dvnt-product-intro.component';
import { DvntProductMobileImagesComponent } from './dvnt-product-mobile-images/dvnt-product-mobile-images.component';
import { DvntProductTabsComponent } from './dvnt-product-tabs/dvnt-product-tabs.component';
import { DvntProductTabsWrapperComponent } from './dvnt-product-tabs-wrapper/dvnt-product-tabs-wrapper.component';
import { DvntProductUpSellingReferencesComponent } from './dvnt-product-up-selling-references/dvnt-product-up-selling-references.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};

@NgModule({
  declarations: [
    DvntAddProductToCartComponent,
    DvntProductDetailsComponent,
    DvntProductImagesComponent,
    DvntProductIntroComponent,
    DvntProductMobileImagesComponent,
    DvntProductTabsComponent,
    DvntProductTabsWrapperComponent,
    DvntProductUpSellingReferencesComponent,
  ],
  imports: [
    CartComponentModule,
    CommonModule,
    I18nModule,
    ItemCounterModule,
    MediaModule,
    OutletModule,
    PageComponentModule,
    RouterModule,
    StarRatingModule,
    SwiperModule,
    UrlModule,
    DvntCarouselModule,
    ConfigModule.withConfigFactory(cmsStructureConfig),
    ConfigModule.withConfig({
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
    } as CmsConfig),
    ConfigModule.withConfig({
      layoutSlots: {
        ProductDetailsPageTemplate: {
          slots: ['DvntProductDetails', 'UpSelling'],
        },
      },
    }),
  ],
  entryComponents: [
    DvntAddProductToCartComponent,
    DvntProductDetailsComponent,
    DvntProductImagesComponent,
    DvntProductIntroComponent,
    DvntProductMobileImagesComponent,
    DvntProductTabsComponent,
    DvntProductTabsWrapperComponent,
    DvntProductUpSellingReferencesComponent,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
})
export class DvntProductDetailsModule {}

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
