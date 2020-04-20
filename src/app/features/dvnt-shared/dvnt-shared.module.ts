import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  I18nModule,
  UrlModule,
  FeaturesConfigModule,
  ConfigModule,
} from '@spartacus/core';
import {
  MediaModule,
  StarRatingModule,
  ItemCounterModule,
} from '@spartacus/storefront';

import { NgSelectModule } from '@ng-select/ng-select';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { DvntAddressCardComponent } from './components/dvnt-address-card/dvnt-address-card.component';
import { DvntAppliedCouponsComponent } from './components/dvnt-applied-coupons/dvnt-applied-coupons.component';
import { DvntCardComponent } from './components/dvnt-card/dvnt-card.component';
import { DvntCarouselProductsComponent } from './components/dvnt-carousel-products/dvnt-carousel-products.component';
import { DvntCartItemComponent } from './components/dvnt-cart-item/dvnt-cart-item.component';
import { DvntCategoriesComponent } from './components/dvnt-categories/dvnt-categories.component';
import { DvntCategoriesRowComponent } from './components/dvnt-categories-row/dvnt-categories-row.component';
import { DvntCategoriesService } from './services/dvnt-categories/dvnt-categories.service';
import { DvntCouponComponent } from './components/dvnt-coupon/dvnt-coupon.component';
import { DvntGlobalMessageComponent } from './components/dvnt-global-message/dvnt-global-message.component';
import { DvntIconComponent } from './components/dvnt-icon/dvnt-icon.component';
import { DvntPaginationComponent } from './components/dvnt-pagination/dvnt-pagination.component';
import { SharedModule } from '../../shared/shared.module';
import { sharedTranslationsConfig } from './config/shared.config';
import { DvntAddressFormComponent } from './components/dvnt-address-form/dvnt-address-form.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  a11y: true,
  direction: 'horizontal',
  keyboard: true,
  mousewheel: false,
  pagination: false,
};

@NgModule({
  declarations: [
    DvntAddressCardComponent,
    DvntAddressFormComponent,
    DvntAppliedCouponsComponent,
    DvntCardComponent,
    DvntCarouselProductsComponent,
    DvntCartItemComponent,
    DvntCategoriesComponent,
    DvntCategoriesRowComponent,
    DvntCouponComponent,
    DvntGlobalMessageComponent,
    DvntIconComponent,
    DvntPaginationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MediaModule,
    RouterModule,
    StarRatingModule,
    SwiperModule,
    UrlModule,
    I18nModule,
    SharedModule,
    FeaturesConfigModule,
    ItemCounterModule,
    NgSelectModule,
    ConfigModule.withConfig(sharedTranslationsConfig),
  ],
  exports: [
    DvntAddressCardComponent,
    DvntAddressFormComponent,
    DvntAppliedCouponsComponent,
    DvntCardComponent,
    DvntCarouselProductsComponent,
    DvntCartItemComponent,
    DvntCategoriesComponent,
    DvntCategoriesRowComponent,
    DvntCouponComponent,
    DvntGlobalMessageComponent,
    DvntIconComponent,
    DvntPaginationComponent,
  ],
  providers: [
    DvntCategoriesService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
})
export class DvntSharedModule {}
