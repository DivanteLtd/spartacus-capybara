import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItemListComponent } from '@spartacus/storefront';
import {
  OrderEntry,
  CartService,
  SelectiveCartService,
  FeatureConfigService,
  RoutingService,
} from '@spartacus/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dvnt-cart-product-list',
  templateUrl: './dvnt-cart-product-list.component.html',
  styleUrls: ['./dvnt-cart-product-list.component.scss'],
})
export class DvntCartProductListComponent extends CartItemListComponent {
  @Input() public products: OrderEntry[] = [];

  @Output() public closeSideBar = new EventEmitter<any>();

  constructor(
    // tslint:disable-next-line: deprecation
    cartService: CartService,
    fb: FormBuilder,
    featureConfig: FeatureConfigService,
    selectiveCartService: SelectiveCartService,
    private routingService: RoutingService
  ) {
    super(cartService, fb, selectiveCartService, featureConfig);
  }

  public trackByFn(index, item: OrderEntry) {
    return item.product.code;
  }

  public gotToProduct(item: OrderEntry): void {
    this.routingService.go({
      cxRoute: 'product',
      params: item.product,
    });
    this.closeSideBar.emit();
  }
}
