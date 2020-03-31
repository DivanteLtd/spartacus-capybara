import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';

import { DvntFooterComponent } from './dvnt-footer.component';
import { footerCmsConfig } from './config/footer.config';

@NgModule({
  declarations: [DvntFooterComponent],
  imports: [CommonModule, ConfigModule.withConfig(footerCmsConfig)],
  entryComponents: [DvntFooterComponent],
})
export class DvntFooterModule {}
