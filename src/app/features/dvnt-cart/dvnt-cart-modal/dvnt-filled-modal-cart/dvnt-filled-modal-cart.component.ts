import { Component, Output, Input, EventEmitter } from '@angular/core';
import { MiniCartComponent, PromotionService } from '@spartacus/storefront';
import {
  RoutingService,
  CartService,
  OrderEntry,
  PromotionResult,
  StateWithCart,
  CartSelectors,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dvnt-filled-modal-cart',
  templateUrl: './dvnt-filled-modal-cart.component.html',
  styleUrls: ['./dvnt-filled-modal-cart.component.scss'],
})
export class DvntFilledModalCartComponent extends MiniCartComponent {
  public promotions$: Observable<
    PromotionResult[]
  > = this.promotionService.getOrderPromotionsFromCart();

  public loading$: Observable<boolean> = this.store.select(
    CartSelectors.getCartLoading
  );

  @Input() public products: OrderEntry[] = [];

  @Output() public closeSideBar = new EventEmitter<any>();

  constructor(
    // tslint:disable-next-line: deprecation
    protected cartService: CartService,
    protected store: Store<StateWithCart>,
    private promotionService: PromotionService,
    private routingService: RoutingService
  ) {
    super(cartService);
  }

  public goToCheckout(): void {
    this.closeSideBar.emit();
    this.routingService.goByUrl('checkout');
  }

  public dismissCartModal(): void {
    this.closeSideBar.emit();
  }
}
