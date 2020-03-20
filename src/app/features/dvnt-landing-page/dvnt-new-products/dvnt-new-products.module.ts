import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DvntNewProductsComponent } from './dvnt-new-products.component';
import { DvntSharedModule } from '../../dvnt-shared/dvnt-shared.module';

@NgModule({
  declarations: [DvntNewProductsComponent],
  imports: [CommonModule, DvntSharedModule],
  entryComponents: [DvntNewProductsComponent],
})
export class DvntNewProductsModule {}
