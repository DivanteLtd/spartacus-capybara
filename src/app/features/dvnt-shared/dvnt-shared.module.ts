import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UrlModule, FeaturesConfigModule } from '@spartacus/core';
import {
  MediaModule,
  StarRatingModule,
  ItemCounterModule,
} from '@spartacus/storefront';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { DvntCarouselProductsComponent } from './components/dvnt-carousel-products/dvnt-carousel-products.component';
import { DvntCartItemComponent } from './components/dvnt-cart-item/dvnt-cart-item.component';
import { DvntCategoriesComponent } from './components/dvnt-categories/dvnt-categories.component';
import { DvntCategoriesRowComponent } from './components/dvnt-categories-row/dvnt-categories-row.component';
import { DvntIconComponent } from './components/dvnt-icon/dvnt-icon.component';
import { DvntPaginationComponent } from './components/dvnt-pagination/dvnt-pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};

@NgModule({
  declarations: [
    DvntCarouselProductsComponent,
    DvntCartItemComponent,
    DvntCategoriesComponent,
    DvntCategoriesRowComponent,
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
    FeaturesConfigModule,
    ItemCounterModule,
  ],
  exports: [
    DvntCarouselProductsComponent,
    DvntCartItemComponent,
    DvntCategoriesComponent,
    DvntCategoriesRowComponent,
    DvntIconComponent,
    DvntPaginationComponent,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
})
export class DvntSharedModule {}
