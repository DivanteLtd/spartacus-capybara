import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nModule, UrlModule, FeaturesConfigModule } from '@spartacus/core';
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
import { DvntCardComponent } from './components/dvnt-card/dvnt-card.component';
import { SharedModule } from '../../shared/shared.module';
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
    DvntCardComponent,
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
  ],
  exports: [
    DvntCarouselProductsComponent,
    DvntCartItemComponent,
    DvntCategoriesComponent,
    DvntCategoriesRowComponent,
    DvntIconComponent,
    DvntPaginationComponent,
    DvntCardComponent,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
})
export class DvntSharedModule {}
