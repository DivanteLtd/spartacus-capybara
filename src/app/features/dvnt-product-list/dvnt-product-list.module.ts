import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvntProductListComponent } from './dvnt-product-list/dvnt-product-list.component';
import { CmsConfig, ConfigModule, FeaturesConfigModule } from '@spartacus/core';
import { SharedModule } from '../../shared/shared.module';
import {
  ListNavigationModule,
  ProductListModule,
  StarRatingModule,
} from '@spartacus/storefront';
import { DvntCategoriesComponent } from './dvnt-categories/dvnt-categories.component';
import { DvntProductFacetNavigationComponent } from './dvnt-product-facet-navigation/dvnt-product-facet-navigation.component';
import { DvntProductListItemComponent } from './dvnt-product-list-item/dvnt-product-list-item.component';
import { DvntProductGridItemComponent } from './dvnt-product-grid-item/dvnt-product-grid-item.component';

@NgModule({
  declarations: [
    DvntProductListComponent,
    DvntCategoriesComponent,
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
        ProductRefinementComponent: {
          component: DvntCategoriesComponent,
        },
      },
    } as CmsConfig),
    ConfigModule.withConfig({
      layoutSlots: {
        ProductListPageTemplate: {
          xs: {
            slots: ['ProductListSlot'],
          },
          md: {
            slots: ['ProductLeftRefinements', 'ProductListSlot'],
          },
        },
      },
    }),
    StarRatingModule,
    FeaturesConfigModule,
  ],
  entryComponents: [
    DvntProductListComponent,
    DvntCategoriesComponent,
    DvntProductFacetNavigationComponent,
  ],
})
export class DvntProductListModule {}
