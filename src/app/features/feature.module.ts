import { NgModule } from '@angular/core';

import { DvntBottomNavigationModule } from './dvnt-bottom-navigation/dvnt-bottom-navigation.module';
import { DvntFooterModule } from './dvnt-footer/dvnt-footer.module';
import { DvntHeaderModule } from './dvnt-header/dvnt-header.module';
import { DvntModalSearchModule } from './dvnt-modal-search/dvnt-modal-search.module';
import { DvntPageNotFoundModule } from './dvnt-page-not-found/dvnt-page-not-found.module';
import { DvntProfileLinkListModule } from './dvnt-profile-link-list/dvnt-profile-link-list.module';
import { StyleGuideModule } from './style-guide/style-guide.module';

@NgModule({
  imports: [
    DvntBottomNavigationModule,
    DvntFooterModule,
    DvntHeaderModule,
    DvntModalSearchModule,
    DvntPageNotFoundModule,
    DvntProfileLinkListModule,
    StyleGuideModule,
  ],
})
export class FeatureModule {}
