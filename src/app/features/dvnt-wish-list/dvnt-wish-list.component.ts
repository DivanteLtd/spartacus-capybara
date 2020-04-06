import { Component } from '@angular/core';
import { WishListComponent } from '@spartacus/storefront';
import { WishListService, OrderEntry } from '@spartacus/core';

import { GoogleAnalyticsEventsService } from 'src/app/shared/google-analytics/google-analytics-event.service';
import {
  GoogleEventCategory,
  GoogleActionCategory,
  GoogleLabelCategory,
} from 'src/app/shared/google-analytics/google-analytics.enum';

@Component({
  selector: 'app-dvnt-wish-list',
  templateUrl: './dvnt-wish-list.component.html',
  styleUrls: ['./dvnt-wish-list.component.scss'],
})
export class DvntWishListComponent extends WishListComponent {
  constructor(
    wishListService: WishListService,
    private googleAnalyticsEventsService: GoogleAnalyticsEventsService
  ) {
    super(wishListService);
  }

  public removeEntry(item: OrderEntry) {
    super.removeEntry(item);

    this.googleAnalyticsEventsService.emitEvent(
      GoogleEventCategory.SelectProduct,
      GoogleActionCategory.RemoveFromWishList,
      GoogleLabelCategory.ProductCode,
      item.product.code
    );
  }
}
