import { NgModule } from '@angular/core';

import { ProfileLinkListModule } from './profile-link-list/profile-link-list.module';
import { StyleGuideModule } from './style-guide/style-guide.module';
import { ModalSearchModule } from './modal-search/modal-search.module';
import { DvntBreadcrumbsModule } from './dvnt-breadcrumbs/dvnt-breadcrumbs.module';
import { DvntProductListModule } from './dvnt-product-list/dvnt-product-list.module';

@NgModule({
  imports: [
    ProfileLinkListModule,
    StyleGuideModule,
    ModalSearchModule,
    DvntBreadcrumbsModule,
    DvntProductListModule,
  ],
  exports: [ProfileLinkListModule, StyleGuideModule, ModalSearchModule],
})
export class FeatureModule {}
