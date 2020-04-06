import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import {
  AddToCartComponent,
  ModalService,
  CurrentProductService,
} from '@spartacus/storefront';
import {
  CartService,
  GlobalMessageService,
  GlobalMessageType,
} from '@spartacus/core';
import { GoogleAnalyticsEventsService } from 'src/app/shared/google-analytics/google-analytics-event.service';
import {
  GoogleEventCategory,
  GoogleActionCategory,
  GoogleLabelCategory,
} from 'src/app/shared/google-analytics/google-analytics.enum';

@Component({
  selector: 'app-dvnt-add-product-to-cart',
  templateUrl: './dvnt-add-product-to-cart.component.html',
  styleUrls: ['./dvnt-add-product-to-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DvntAddProductToCartComponent extends AddToCartComponent {
  constructor(
    // tslint:disable-next-line: deprecation
    cartService: CartService,
    cd: ChangeDetectorRef,
    currentProductService: CurrentProductService,
    modalService: ModalService,
    private globalMessageService: GlobalMessageService,
    private googleAnalyticsEventsService: GoogleAnalyticsEventsService
  ) {
    super(cartService, modalService, currentProductService, cd);
  }

  public addToCart() {
    if (!this.productCode || this.quantity <= 0) {
      return;
    }

    this.cartService
      .getEntry(this.productCode)
      .subscribe((entry) => {
        if (entry) {
          this.increment = true;
        }
        this.globalMessageService.add(
          'Product has been added to the cart!',
          GlobalMessageType.MSG_TYPE_CONFIRMATION
        );
        this.cartService.addEntry(this.productCode, this.quantity);
        this.increment = false;

        this.addToCartGoogleEvent(this.productCode);
      })
      .unsubscribe();
  }

  private addToCartGoogleEvent(productCode: string): void {
    this.googleAnalyticsEventsService.emitEvent(
      GoogleEventCategory.SelectProduct,
      GoogleActionCategory.AddToCart,
      GoogleLabelCategory.ProductCode,
      productCode
    );
  }
}
