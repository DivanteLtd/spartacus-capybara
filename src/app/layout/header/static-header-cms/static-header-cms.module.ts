import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';

import {
  staticHeaderLayoutConfig,
  defaultCmsContentConfig,
} from './static-header-layout.config';
import { CustomLoginComponent } from '../custom-login/custom-login.component';
import { CustomWishListIconComponent } from '../custom-wish-list-icon/custom-wish-list-icon.component';
import { StaticHeaderLogoComponent } from '../static-header-logo/static-header-logo.component';

@NgModule({
  imports: [
    ConfigModule.withConfigFactory(defaultCmsContentConfig),
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
      },
    }),
    ConfigModule.withConfig(staticHeaderLayoutConfig),
  ],
})
export class StaticHeaderCmsModule {}
