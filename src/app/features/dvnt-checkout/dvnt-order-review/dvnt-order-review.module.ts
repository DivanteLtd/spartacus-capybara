import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvntOrderReviewComponent } from './dvnt-order-review/dvnt-order-review.component';
import { SharedModule } from '../../../shared/shared.module';
import { DvntSharedModule } from '../../dvnt-shared/dvnt-shared.module';
import {
  CartSharedModule,
  PlaceOrderModule,
  PromotionsModule,
} from '@spartacus/storefront';
import { DvntOrderReviewProductItemComponent } from './dvnt-order-review-products/dvnt-order-review-product-item.component';
import { DvntReviewOrderComponent } from './dvnt-review-order/dvnt-review-order.component';

@NgModule({
  declarations: [
    DvntOrderReviewComponent,
    DvntOrderReviewProductItemComponent,
    DvntReviewOrderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DvntSharedModule,
    PromotionsModule,
    CartSharedModule,
    PlaceOrderModule,
  ],
  entryComponents: [DvntOrderReviewComponent, DvntReviewOrderComponent],
  exports: [DvntOrderReviewComponent, DvntReviewOrderComponent],
})
export class DvntOrderReviewModule {}
