import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvntProductListComponent } from './dvnt-product-list/dvnt-product-list.component';
import {
  CmsConfig,
  CmsPageSlotsConfig,
  CmsStructureConfig,
  ConfigModule,
  ContentSlotComponentData,
  FeaturesConfigModule,
} from '@spartacus/core';
import { SharedModule } from '../../shared/shared.module';
import {
  ListNavigationModule,
  NavigationModule,
  ProductListModule,
  StarRatingModule,
} from '@spartacus/storefront';
import { DvntProductFacetNavigationComponent } from './dvnt-product-facet-navigation/dvnt-product-facet-navigation.component';
import { DvntProductListItemComponent } from './dvnt-product-list-item/dvnt-product-list-item.component';
import { DvntProductGridItemComponent } from './dvnt-product-grid-item/dvnt-product-grid-item.component';
import { DvntSharedModule } from '../dvnt-shared/dvnt-shared.module';

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
    ConfigModule.withConfig({
      cmsComponents: {
        CMSProductListComponent: {
          component: DvntProductListComponent,
        },
      },
    } as CmsConfig),
    ConfigModule.withConfig({
      layoutSlots: {
        ProductListPageTemplate: {
          xs: {
            slots: ['ProductListSlot'],
          },
        },
      },
    }),
    StarRatingModule,
    FeaturesConfigModule,
    DvntSharedModule,
    NavigationModule,
  ],
  entryComponents: [
    DvntProductListComponent,
    DvntProductFacetNavigationComponent,
  ],
})
export class DvntProductListModule {}
