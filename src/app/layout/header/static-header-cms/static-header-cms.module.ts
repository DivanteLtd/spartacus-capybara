import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';

import { CustomLoginComponent } from '../custom-login/custom-login.component';
import { CustomMiniCartComponent } from '../custom-mini-cart/custom-mini-cart.component';
import { CustomWishListIconComponent } from '../custom-wish-list-icon/custom-wish-list-icon.component';
import {
  staticHeaderLayoutConfig,
  defaultHeaderCmsContentConfig,
} from './static-header-layout.config';
import { StaticHeaderLogoComponent } from '../static-header-logo/static-header-logo.component';

@NgModule({
  imports: [
    ConfigModule.withConfigFactory(defaultHeaderCmsContentConfig),
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
    }),
    ConfigModule.withConfig(staticHeaderLayoutConfig),
  ],
})
export class StaticHeaderCmsModule {}
