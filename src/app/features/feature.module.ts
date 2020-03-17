import { NgModule } from '@angular/core';

import { DvntBottomNavigationModule } from './dvnt-bottom-navigation/dvnt-bottom-navigation.module';
import { DvntFooterModule } from './dvnt-footer/dvnt-footer.module';
import { DvntPageNotFoundModule } from './dvnt-page-not-found/dvnt-page-not-found.module';
import { ModalSearchModule } from './modal-search/modal-search.module';
import { ProfileLinkListModule } from './profile-link-list/profile-link-list.module';
import { StyleGuideModule } from './style-guide/style-guide.module';

@NgModule({
  imports: [
    DvntBottomNavigationModule,
    DvntFooterModule,
    DvntPageNotFoundModule,
    ModalSearchModule,
    ProfileLinkListModule,
    StyleGuideModule,
  ],
})
export class FeatureModule {}
