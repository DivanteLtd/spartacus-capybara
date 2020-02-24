import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';

import {
  staticHeaderLayoutConfig,
  defaultCmsContentConfig,
} from './static-header-layout.config';
import { StaticHeaderLogoComponent } from '../header/static-header-logo/static-header-logo.component';

@NgModule({
  declarations: [StaticHeaderLogoComponent],
  imports: [
    ConfigModule.withConfigFactory(defaultCmsContentConfig),
    ConfigModule.withConfig({
      cmsComponents: {
        StaticHeaderLogoComponent: {
          component: StaticHeaderLogoComponent,
        },
      },
    }),
    ConfigModule.withConfig(staticHeaderLayoutConfig),
  ],
  entryComponents: [StaticHeaderLogoComponent],
})
export class StaticHeaderCmsModule {}
