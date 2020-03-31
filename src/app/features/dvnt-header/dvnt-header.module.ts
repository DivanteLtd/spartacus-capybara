import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageSlotModule } from '@spartacus/storefront';
import { UrlModule, I18nModule, ConfigModule } from '@spartacus/core';

import { DvntHeaderLogoComponent } from './dvnt-header-logo/dvnt-header-logo.component';
import { DvntLoginComponent } from './dvnt-login/dvnt-login.component';
import { DvntMiniCartComponent } from './dvnt-mini-cart/dvnt-mini-cart.component';
import { DvntSharedModule } from '../dvnt-shared/dvnt-shared.module';
import { DvntWishListIconComponent } from './dvnt-wish-list-icon/dvnt-wish-list-icon.component';
import {
  headerCmsStructureConfig,
  headerCmsConfig,
  headerLayoutConfig,
} from './config/header.config';

@NgModule({
  declarations: [
    DvntHeaderLogoComponent,
    DvntLoginComponent,
    DvntMiniCartComponent,
    DvntWishListIconComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DvntSharedModule,
    I18nModule,
    PageSlotModule,
    UrlModule,
    ConfigModule.withConfigFactory(headerCmsStructureConfig),
    ConfigModule.withConfig(headerCmsConfig),
    ConfigModule.withConfig(headerLayoutConfig),
  ],
  entryComponents: [
    DvntHeaderLogoComponent,
    DvntLoginComponent,
    DvntMiniCartComponent,
    DvntWishListIconComponent,
  ],
})
export class DvntHeaderModule {}
