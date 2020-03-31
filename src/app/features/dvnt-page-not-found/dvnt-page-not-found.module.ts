import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, I18nModule } from '@spartacus/core';

import { DvntPageNotFoundComponent } from './dvnt-page-not-found.component';
import { DvntSharedModule } from '../dvnt-shared/dvnt-shared.module';
import {
  pageNotFoundCmsStructureConfig,
  pageNotFoundTranslationsConfig,
  pageNotFoundCmsConfig,
  pageNotFoundLayoutConfig,
} from './config/page-not-found.config';

@NgModule({
  declarations: [DvntPageNotFoundComponent],
  imports: [
    CommonModule,
    I18nModule,
    DvntSharedModule,
    ConfigModule.withConfigFactory(pageNotFoundCmsStructureConfig),
    ConfigModule.withConfig(pageNotFoundTranslationsConfig),
    ConfigModule.withConfig(pageNotFoundCmsConfig),
    ConfigModule.withConfig(pageNotFoundLayoutConfig),
  ],
  entryComponents: [DvntPageNotFoundComponent],
})
export class DvntPageNotFoundModule {}
