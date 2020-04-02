import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvntOrderConfirmationComponent } from './dvnt-order-confirmation/dvnt-order-confirmation.component';
import { SharedModule } from '../../../shared/shared.module';
import { OrderConfirmationModule, PwaModule } from '@spartacus/storefront';

@NgModule({
  declarations: [DvntOrderConfirmationComponent],
  imports: [CommonModule, SharedModule, OrderConfirmationModule, PwaModule],
  entryComponents: [DvntOrderConfirmationComponent],
})
export class DvntOrderConfirmationModule {}
