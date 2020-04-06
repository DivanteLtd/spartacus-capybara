import { Component } from '@angular/core';
import { WishListItemComponent } from '@spartacus/storefront';
import { CartService } from '@spartacus/core';
import { GoogleAnalyticsEventsService } from 'src/app/shared/google-analytics/google-analytics-event.service';
import {
  GoogleEventCategory,
  GoogleActionCategory,
  GoogleLabelCategory,
} from 'src/app/shared/google-analytics/google-analytics.enum';

@Component({
  selector: 'app-dvnt-wish-list-item',
  templateUrl: './dvnt-wish-list-item.component.html',
  styleUrls: ['./dvnt-wish-list-item.component.scss'],
})
export class DvntWishListItemComponent extends WishListItemComponent {
  constructor(
    // tslint:disable-next-line: deprecation
    private cartService: CartService,
    private googleAnalyticsEventsService: GoogleAnalyticsEventsService
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

    this.googleAnalyticsEventsService.emitEvent(
      GoogleEventCategory.SelectProduct,
      GoogleActionCategory.AddToCartFromWishList,
      GoogleLabelCategory.ProductCode,
      this.cartEntry.product.code
    );
  }
}
