import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageSlotModule } from '@spartacus/storefront';
import { UrlModule, I18nModule } from '@spartacus/core';

import { CustomLoginComponent } from './custom-login/custom-login.component';
import { CustomMiniCartComponent } from './custom-mini-cart/custom-mini-cart.component';
import { CustomWishListIconComponent } from './custom-wish-list-icon/custom-wish-list-icon.component';
import { StaticHeaderLogoComponent } from './static-header-logo/static-header-logo.component';

@NgModule({
  declarations: [
    CustomLoginComponent,
    CustomMiniCartComponent,
    CustomWishListIconComponent,
    StaticHeaderLogoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    // SPRATACUS
    I18nModule,
    PageSlotModule,
    UrlModule,
  ],
  entryComponents: [
    CustomLoginComponent,
    CustomMiniCartComponent,
    CustomWishListIconComponent,
    StaticHeaderLogoComponent,
  ],
})
export class HeaderModule {}
