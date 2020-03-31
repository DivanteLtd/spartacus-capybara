import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UrlModule, I18nModule, ConfigModule } from '@spartacus/core';
import { IconModule, MediaModule } from '@spartacus/storefront';

import { DvntModalSearchComponent } from './dvnt-modal-search.component';
import { DvntSharedModule } from '../dvnt-shared/dvnt-shared.module';
import { modalSearchTranslationsConfig } from './config/modal-search.config';

@NgModule({
  declarations: [DvntModalSearchComponent],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    UrlModule,
    I18nModule,
    MediaModule,
    DvntSharedModule,
    ConfigModule.withConfig(modalSearchTranslationsConfig),
  ],
  entryComponents: [DvntModalSearchComponent],
  exports: [DvntModalSearchComponent],
})
export class DvntModalSearchModule {}
