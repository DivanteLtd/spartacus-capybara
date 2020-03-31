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
    private globalMessageService: GlobalMessageService
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
      })
      .unsubscribe();
  }
}
