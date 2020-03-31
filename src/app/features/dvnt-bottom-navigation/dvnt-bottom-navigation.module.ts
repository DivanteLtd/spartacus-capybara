import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule, ConfigModule } from '@spartacus/core';

import {
  bottomNavigationCmsConfig,
  bottomNavigationLayoutConfig,
  bottomNavigationTranslationsConfig,
  cmsStructureConfig,
} from './config/bottom-navigation.config';
import { DvntBottomNavigationComponent } from './dvnt-bottom-navigation.component';
import { DvntSharedModule } from '../dvnt-shared/dvnt-shared.module';

@NgModule({
  declarations: [DvntBottomNavigationComponent],
  imports: [
    CommonModule,
    I18nModule,
    DvntSharedModule,
    ConfigModule.withConfigFactory(cmsStructureConfig),
    ConfigModule.withConfig(bottomNavigationTranslationsConfig),
    ConfigModule.withConfig(bottomNavigationCmsConfig),
    ConfigModule.withConfig(bottomNavigationLayoutConfig),
  ],
  entryComponents: [DvntBottomNavigationComponent],
})
export class DvntBottomNavigationModule {}
