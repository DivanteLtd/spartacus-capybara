import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { MediaModule, SpinnerModule } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';

import { DvntWishListComponent } from './dvnt-wish-list.component';
import { DvntWishListItemComponent } from './dvnt-wish-list-item/dvnt-wish-list-item.component';
import {
  wishListCmsConfig,
  cmsStructureConfig,
  wishTranslationsConfig,
} from './config/wish-list.config';

@NgModule({
  declarations: [DvntWishListComponent, DvntWishListItemComponent],
  imports: [
    CommonModule,
    I18nModule,
    MediaModule,
    RouterModule,
    UrlModule,
    SpinnerModule,
    ConfigModule.withConfig(wishTranslationsConfig),
    ConfigModule.withConfigFactory(cmsStructureConfig),
    ConfigModule.withConfig(wishListCmsConfig),
  ],
  entryComponents: [DvntWishListComponent],
})
export class DvntWishListModule {}
