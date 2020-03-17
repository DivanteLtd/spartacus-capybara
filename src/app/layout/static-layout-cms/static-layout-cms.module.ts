import { NgModule } from '@angular/core';
import { ConfigModule, CmsConfig } from '@spartacus/core';

import { BottomNavigationComponent } from '../bottom-navigation/bottom-navigation.component';
import { BottomNavigationModule } from '../bottom-navigation/bottom-navigation.module';
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
import { PageNotFoundModule } from '../page-not-found/page-not-found.module';

@NgModule({
  imports: [
    ConfigModule.withConfigFactory(defaultStaticCmsContentConfig),
    ConfigModule.withConfig({
      cmsComponents: {
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
        BottomNavigationComponent: {
          component: BottomNavigationComponent,
        },
      },
    } as CmsConfig),
    ConfigModule.withConfig(staticLayoutConfig),
    BottomNavigationModule,
    FooterModule,
    HeaderModule,
    PageNotFoundModule,
  ],
})
export class StaticLayoutCmsModule {}
