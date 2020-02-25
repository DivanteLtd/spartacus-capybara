import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageSlotModule } from '@spartacus/storefront';
import { UrlModule, I18nModule } from '@spartacus/core';

import { CustomLoginComponent } from './custom-login/custom-login.component';
import { StaticHeaderCmsModule } from './static-header-cms/static-header-cms.module';
import { StaticHeaderLogoComponent } from './static-header-logo/static-header-logo.component';
import { CustomWishListIconComponent } from './custom-wish-list-icon/custom-wish-list-icon.component';

@NgModule({
  declarations: [
    StaticHeaderLogoComponent,
    CustomLoginComponent,
    CustomWishListIconComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    // SPRATACUS
    StaticHeaderCmsModule,
    PageSlotModule,
    UrlModule,
    I18nModule,
  ],
  entryComponents: [
    StaticHeaderLogoComponent,
    CustomLoginComponent,
    CustomWishListIconComponent,
  ],
})
export class HeaderModule {}
