import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { I18nModule, UrlModule, ConfigModule } from '@spartacus/core';
import {
  StarRatingModule,
  ItemCounterModule,
  CartComponentModule,
  MediaModule,
  OutletModule,
  PageComponentModule,
  SpinnerModule,
} from '@spartacus/storefront';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgSelectModule } from '@ng-select/ng-select';

import { DvntAddProductToCartComponent } from './dvnt-add-product-to-cart/dvnt-add-product-to-cart.component';
import { DvntCarouselModule } from 'src/app/shared/carousel/dvnt-carousel.module';
import { DvntProductColorVariantComponent } from './dvnt-product-variants/dvnt-product-color-variant/dvnt-product-color-variant.component';
import { DvntProductDetailsComponent } from './dvnt-product-details/dvnt-product-details.component';
import { DvntProductDetailsService } from './dvnt-product-details.service';
import { DvntProductImagesComponent } from './dvnt-product-images/dvnt-product-images.component';
import { DvntProductIntroComponent } from './dvnt-product-intro/dvnt-product-intro.component';
import { DvntProductMobileImagesComponent } from './dvnt-product-mobile-images/dvnt-product-mobile-images.component';
import { DvntProductSizeVariantComponent } from './dvnt-product-variants/dvnt-product-size-variant/dvnt-product-size-variant.component';
import { DvntProductStyleVariantComponent } from './dvnt-product-variants/dvnt-product-style-variant/dvnt-product-style-variant.component';
import { DvntProductTabsComponent } from './dvnt-product-tabs/dvnt-product-tabs.component';
import { DvntProductTabsWrapperComponent } from './dvnt-product-tabs-wrapper/dvnt-product-tabs-wrapper.component';
import { DvntProductUpSellingReferencesComponent } from './dvnt-product-up-selling-references/dvnt-product-up-selling-references.component';
import { DvntProductVariantsComponent } from './dvnt-product-variants/dvnt-product-variants.component';
import { DvntStockNotificationComponent } from './dvnt-stock-notification/dvnt-stock-notification.component';
import {
  productDetailsCmsStructureConfig,
  productDetailsTranslationsConfig,
  productDetailsCmsConfig,
  productDetailsLayoutConfig,
} from './config/product-details.config';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  a11y: true,
  direction: 'horizontal',
  keyboard: true,
  mousewheel: false,
  pagination: false,
};

@NgModule({
  declarations: [
    DvntAddProductToCartComponent,
    DvntProductColorVariantComponent,
    DvntProductDetailsComponent,
    DvntProductImagesComponent,
    DvntProductIntroComponent,
    DvntProductMobileImagesComponent,
    DvntProductSizeVariantComponent,
    DvntProductStyleVariantComponent,
    DvntProductTabsComponent,
    DvntProductTabsWrapperComponent,
    DvntProductUpSellingReferencesComponent,
    DvntProductVariantsComponent,
    DvntStockNotificationComponent,
  ],
  imports: [
    CartComponentModule,
    CommonModule,
    I18nModule,
    ItemCounterModule,
    MediaModule,
    OutletModule,
    FormsModule,
    ReactiveFormsModule,
    PageComponentModule,
    RouterModule,
    StarRatingModule,
    SwiperModule,
    UrlModule,
    SpinnerModule,
    NgSelectModule,
    DvntCarouselModule,
    ConfigModule.withConfigFactory(productDetailsCmsStructureConfig),
    ConfigModule.withConfig(productDetailsTranslationsConfig),
    ConfigModule.withConfig(productDetailsCmsConfig),
    ConfigModule.withConfig(productDetailsLayoutConfig),
  ],
  entryComponents: [
    DvntAddProductToCartComponent,
    DvntProductColorVariantComponent,
    DvntProductDetailsComponent,
    DvntProductImagesComponent,
    DvntProductIntroComponent,
    DvntProductMobileImagesComponent,
    DvntProductTabsComponent,
    DvntProductTabsWrapperComponent,
    DvntProductUpSellingReferencesComponent,
    DvntProductVariantsComponent,
    DvntStockNotificationComponent,
  ],
  providers: [
    DvntProductDetailsService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
})
export class DvntProductDetailsModule {}
