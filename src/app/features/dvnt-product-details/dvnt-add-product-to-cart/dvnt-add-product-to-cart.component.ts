import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AddToCartComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-dvnt-add-product-to-cart',
  templateUrl: './dvnt-add-product-to-cart.component.html',
  styleUrls: ['./dvnt-add-product-to-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DvntAddProductToCartComponent extends AddToCartComponent {}
