import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvntProductListComponent } from './dvnt-product-list/dvnt-product-list.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { SharedModule } from '../../shared/shared.module';
import { ListNavigationModule, ProductListModule } from '@spartacus/storefront';
import { DvntCategoriesComponent } from './dvnt-categories/dvnt-categories.component';
import { DvntProductFacetNavigationComponent } from './dvnt-product-facet-navigation/dvnt-product-facet-navigation.component';

@NgModule({
  declarations: [
    DvntProductListComponent,
    DvntCategoriesComponent,
    DvntProductFacetNavigationComponent,
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
  ],
  entryComponents: [
    DvntProductListComponent,
    DvntCategoriesComponent,
    DvntProductFacetNavigationComponent,
  ],
})
export class DvntProductListModule {}
