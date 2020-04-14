import { Component } from '@angular/core';
import { OrderHistoryComponent } from '@spartacus/storefront';
import {
  RoutingService,
  TranslationService,
  UserOrderService,
} from '@spartacus/core';

@Component({
  selector: 'app-dvnt-order-history',
  templateUrl: './dvnt-order-history.component.html',
  styleUrls: ['./dvnt-order-history.component.scss'],
})
export class DvntOrderHistoryComponent extends OrderHistoryComponent {
  constructor(
    routing: RoutingService,
    translation: TranslationService,
    userOrderService: UserOrderService
  ) {
    super(routing, userOrderService, translation);
  }
}
