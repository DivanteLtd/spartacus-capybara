import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DvntBestsellingProductsComponent } from './dvnt-bestselling-products.component';
import { DvntSharedModule } from '../../dvnt-shared/dvnt-shared.module';

@NgModule({
  declarations: [DvntBestsellingProductsComponent],
  imports: [CommonModule, DvntSharedModule],
  entryComponents: [DvntBestsellingProductsComponent],
})
export class DvntBestsellingProductsModule {}
