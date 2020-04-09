import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvntProductListComponent } from './dvnt-product-list/dvnt-product-list.component';
import { ConfigModule, FeaturesConfigModule } from '@spartacus/core';
import { SharedModule } from '../../shared/shared.module';
import {
  ListNavigationModule,
  NavigationModule,
  ProductListModule,
  StarRatingModule,
} from '@spartacus/storefront';

import { DvntProductFacetNavigationComponent } from './dvnt-product-facet-navigation/dvnt-product-facet-navigation.component';
import { DvntProductGridItemComponent } from './dvnt-product-grid-item/dvnt-product-grid-item.component';
import { DvntProductListItemComponent } from './dvnt-product-list-item/dvnt-product-list-item.component';
import { DvntSharedModule } from '../dvnt-shared/dvnt-shared.module';
import {
  productListCmsConfig,
  productListLayoutConfig,
  productListTranslationsConfig,
} from './config/product-list.config';

@NgModule({
  declarations: [
    DvntProductListComponent,
    DvntProductFacetNavigationComponent,
    DvntProductListItemComponent,
    DvntProductGridItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ListNavigationModule,
    ProductListModule,
    StarRatingModule,
    FeaturesConfigModule,
    DvntSharedModule,
    NavigationModule,
    ConfigModule.withConfig(productListTranslationsConfig),
    ConfigModule.withConfig(productListCmsConfig),
    ConfigModule.withConfig(productListLayoutConfig),
  ],
  entryComponents: [
    DvntProductListComponent,
    DvntProductFacetNavigationComponent,
  ],
})
export class DvntProductListModule {}
