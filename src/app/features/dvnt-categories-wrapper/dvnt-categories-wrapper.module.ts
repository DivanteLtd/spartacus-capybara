import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, I18nModule } from '@spartacus/core';

import { DvntCategoriesWrapperComponent } from './dvnt-categories-wrapper.component';
import { DvntSharedModule } from '../dvnt-shared/dvnt-shared.module';
import {
  categoriesWrapperLayoutConfig,
  categoriesWrapperCmsConfig,
  categoriesWrapperTranslationsConfig,
  categoriesWrapperCmsStructureConfig,
} from './config/categories-wrapper.config';

@NgModule({
  declarations: [DvntCategoriesWrapperComponent],
  imports: [
    CommonModule,
    I18nModule,
    DvntSharedModule,
    ConfigModule.withConfigFactory(categoriesWrapperCmsStructureConfig),
    ConfigModule.withConfig(categoriesWrapperTranslationsConfig),
    ConfigModule.withConfig(categoriesWrapperCmsConfig),
    ConfigModule.withConfig(categoriesWrapperLayoutConfig),
  ],
  entryComponents: [DvntCategoriesWrapperComponent],
})
export class DvntCategoriesWrapperModule {}
