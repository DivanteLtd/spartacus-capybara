import { NgModule } from '@angular/core';
import { ConfigModule, CmsConfig } from '@spartacus/core';

import { CustomFooterComponent } from '../footer/custom-footer/custom-footer.component';
import { CustomLoginComponent } from '../header/custom-login/custom-login.component';
import { CustomMiniCartComponent } from '../header/custom-mini-cart/custom-mini-cart.component';
import { CustomWishListIconComponent } from '../header/custom-wish-list-icon/custom-wish-list-icon.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { StaticHeaderLogoComponent } from '../header/static-header-logo/static-header-logo.component';
import {
  defaultStaticCmsContentConfig,
  staticLayoutConfig,
} from './static-layout-layout.config';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { PageNotFoundModule } from '../page-not-found/page-not-found.module';

@NgModule({
  imports: [
    ConfigModule.withConfigFactory(defaultStaticCmsContentConfig),
    ConfigModule.withConfig({
      cmsComponents: {
        PageNotFoundComponent: {
          component: PageNotFoundComponent,
        },
        StaticHeaderLogoComponent: {
          component: StaticHeaderLogoComponent,
        },
        CustomLoginComponent: {
          component: CustomLoginComponent,
        },
        CustomWishListIconComponent: {
          component: CustomWishListIconComponent,
        },
        CustomMiniCartComponent: {
          component: CustomMiniCartComponent,
        },
        FooterNavigationComponent: {
          component: CustomFooterComponent,
        },
      },
    } as CmsConfig),
    ConfigModule.withConfig(staticLayoutConfig),
    FooterModule,
    HeaderModule,
    PageNotFoundModule,
  ],
})
export class StaticLayoutCmsModule {}
