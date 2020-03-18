import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, CmsConfig } from '@spartacus/core';

import { DvntFooterComponent } from './dvnt-footer.component';

@NgModule({
  declarations: [DvntFooterComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        FooterNavigationComponent: {
          component: DvntFooterComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [DvntFooterComponent],
})
export class DvntFooterModule {}
