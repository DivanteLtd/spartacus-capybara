import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '@spartacus/storefront';

import { DvntModalCategoriesComponent } from './dvnt-modal-categories.component';
import { DvntSharedModule } from '../dvnt-shared/dvnt-shared.module';

@NgModule({
  declarations: [DvntModalCategoriesComponent],
  imports: [CommonModule, NavigationModule, DvntSharedModule],
  entryComponents: [DvntModalCategoriesComponent],
})
export class DvntModalCategoriesModule {}
