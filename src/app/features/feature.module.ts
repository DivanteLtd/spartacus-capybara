import { NgModule } from '@angular/core';

import { DvntBottomNavigationModule } from './dvnt-bottom-navigation/dvnt-bottom-navigation.module';
import { DvntBreadcrumbsModule } from './dvnt-breadcrumbs/dvnt-breadcrumbs.module';
import { DvntCartModule } from './dvnt-cart/dvnt-cart.module';
import { DvntCategoriesWrapperModule } from './dvnt-categories-wrapper/dvnt-categories-wrapper.module';
import { DvntFooterModule } from './dvnt-footer/dvnt-footer.module';
import { DvntHeaderModule } from './dvnt-header/dvnt-header.module';
import { DvntLandingPageModule } from './dvnt-landing-page/dvnt-landing-page.module';
import { DvntModalCategoriesModule } from './dvnt-modal-categories/dvnt-modal-categories.module';
import { DvntModalSearchModule } from './dvnt-modal-search/dvnt-modal-search.module';
import { DvntPageNotFoundModule } from './dvnt-page-not-found/dvnt-page-not-found.module';
import { DvntProductDetailsModule } from './dvnt-product-details/dvnt-product-details.module';
import { DvntProductListModule } from './dvnt-product-list/dvnt-product-list.module';
import { DvntProfileLinkListModule } from './dvnt-profile-link-list/dvnt-profile-link-list.module';
import { DvntWishListModule } from './dvnt-wish-list/dvnt-wish-list.module';
import { StyleGuideModule } from './style-guide/style-guide.module';
import { DvntCheckoutModule } from './dvnt-checkout/dvnt-checkout.module';

@NgModule({
  imports: [
    DvntBottomNavigationModule,
    DvntBreadcrumbsModule,
    DvntCartModule,
    DvntCategoriesWrapperModule,
    DvntFooterModule,
    DvntHeaderModule,
    DvntLandingPageModule,
    DvntModalCategoriesModule,
    DvntModalSearchModule,
    DvntPageNotFoundModule,
    DvntProductDetailsModule,
    DvntProductListModule,
    DvntProfileLinkListModule,
    DvntWishListModule,
    StyleGuideModule,
    DvntCheckoutModule,
  ],
})
export class FeatureModule {}
