import { Component } from '@angular/core';
import { WishListItemComponent } from '@spartacus/storefront';
import { CartService } from '@spartacus/core';

@Component({
  selector: 'app-dvnt-wish-list-item',
  templateUrl: './dvnt-wish-list-item.component.html',
  styleUrls: ['./dvnt-wish-list-item.component.scss'],
})
export class DvntWishListItemComponent extends WishListItemComponent {
  constructor(
    // tslint:disable-next-line: deprecation
    private cartService: CartService
  ) {
    super();
  }

  public addToCart(): void {
    if (!this.cartEntry.product.code || this.cartEntry.quantity <= 0) {
      // TO DO add alert
      return;
    }

    this.cartService.addEntry(
      this.cartEntry.product.code,
      this.cartEntry.quantity
    );
    this.remove.emit(this.cartEntry);
  }
}
