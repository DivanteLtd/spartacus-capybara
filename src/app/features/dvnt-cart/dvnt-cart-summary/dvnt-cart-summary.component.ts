import { Component, OnInit } from '@angular/core';
import { CartService, Cart } from '@spartacus/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-dvnt-cart-summary',
  templateUrl: './dvnt-cart-summary.component.html',
  styleUrls: ['./dvnt-cart-summary.component.scss'],
})
export class DvntCartSummaryComponent implements OnInit {
  public cart$: Observable<Cart>;

  constructor(
    // tslint:disable-next-line: deprecation
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.cart$ = this.cartService.getActive();
  }
}
