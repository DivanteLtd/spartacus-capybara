import { NgModule } from '@angular/core';
import { ConfigModule, CmsConfig } from '@spartacus/core';

import { CustomLoginComponent } from '../header/custom-login/custom-login.component';
import { CustomMiniCartComponent } from '../header/custom-mini-cart/custom-mini-cart.component';
import { CustomWishListIconComponent } from '../header/custom-wish-list-icon/custom-wish-list-icon.component';
import { HeaderModule } from '../header/header.module';
import { StaticHeaderLogoComponent } from '../header/static-header-logo/static-header-logo.component';
import {
  defaultStaticCmsContentConfig,
  staticLayoutConfig,
} from './static-layout-layout.config';

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
      },
    } as CmsConfig),
    ConfigModule.withConfig(staticLayoutConfig),
    HeaderModule,
  ],
})
export class StaticLayoutCmsModule {}
