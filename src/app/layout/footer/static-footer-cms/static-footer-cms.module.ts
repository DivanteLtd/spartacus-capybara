import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';

import { CustomFooterComponent } from '../custom-footer/custom-footer.component';

@NgModule({
  imports: [
    ConfigModule.withConfig({
      cmsComponents: {
        FooterNavigationComponent: {
          component: CustomFooterComponent,
        },
      },
    }),
  ],
})
export class StaticFooterCmsModule {}
