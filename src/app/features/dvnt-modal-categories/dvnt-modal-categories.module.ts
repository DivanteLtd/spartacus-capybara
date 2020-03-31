import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '@spartacus/storefront';
import { ConfigModule } from '@spartacus/core';

import { DvntModalCategoriesComponent } from './dvnt-modal-categories.component';
import { DvntSharedModule } from '../dvnt-shared/dvnt-shared.module';
import { modalCategoriesTranslationsConfig } from './config/modal-categories.config';

@NgModule({
  declarations: [DvntModalCategoriesComponent],
  imports: [
    CommonModule,
    NavigationModule,
    DvntSharedModule,
    ConfigModule.withConfig(modalCategoriesTranslationsConfig),
  ],
  entryComponents: [DvntModalCategoriesComponent],
})
export class DvntModalCategoriesModule {}
