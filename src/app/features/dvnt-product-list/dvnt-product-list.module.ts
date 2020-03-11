import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvntProductListComponent } from './dvnt-product-list/dvnt-product-list.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { SharedModule } from '../../shared/shared.module';
import { ListNavigationModule, ProductListModule } from '@spartacus/storefront';
import { DvntCategoriesComponent } from './dvnt-categories/dvnt-categories.component';

@NgModule({
  declarations: [DvntProductListComponent, DvntCategoriesComponent],
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
  ],
  entryComponents: [DvntProductListComponent, DvntCategoriesComponent],
})
export class DvntProductListModule {}
