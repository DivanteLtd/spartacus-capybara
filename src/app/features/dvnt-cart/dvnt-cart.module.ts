import { NgModule } from '@angular/core';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DvntCartModalComponent } from './dvnt-cart-modal/dvnt-cart-modal.component';
import { DvntCartProductListComponent } from './dvnt-cart-product-list/dvnt-cart-product-list.component';
import { DvntCartSummaryComponent } from './dvnt-cart-summary/dvnt-cart-summary.component';
import { DvntEmptyModalCartComponent } from './dvnt-cart-modal/dvnt-empty-modal-cart/dvnt-empty-modal-cart.component';
import { DvntFilledModalCartComponent } from './dvnt-cart-modal/dvnt-filled-modal-cart/dvnt-filled-modal-cart.component';
import { DvntSharedModule } from '../dvnt-shared/dvnt-shared.module';
import { cartTranslationsConfig } from './config/cart.config';

@NgModule({
  declarations: [
    DvntCartModalComponent,
    DvntCartProductListComponent,
    DvntCartSummaryComponent,
    DvntEmptyModalCartComponent,
    DvntFilledModalCartComponent,
  ],
  imports: [
    CommonModule,
    I18nModule,
    RouterModule,
    DvntSharedModule,
    ConfigModule.withConfig(cartTranslationsConfig),
  ],
  entryComponents: [
    DvntCartModalComponent,
    DvntCartProductListComponent,
    DvntCartSummaryComponent,
    DvntEmptyModalCartComponent,
    DvntFilledModalCartComponent,
  ],
})
export class DvntCartModule {}
