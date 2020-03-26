import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DvntCartModalComponent } from './dvnt-cart-modal/dvnt-cart-modal.component';
import { DvntSharedModule } from '../dvnt-shared/dvnt-shared.module';
import { DvntEmptyModalCartComponent } from './dvnt-cart-modal/dvnt-empty-modal-cart/dvnt-empty-modal-cart.component';

@NgModule({
  declarations: [DvntCartModalComponent, DvntEmptyModalCartComponent],
  imports: [CommonModule, DvntSharedModule, RouterModule],
  entryComponents: [DvntCartModalComponent],
})
export class DvntCartModule {}
