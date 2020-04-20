import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {
  BREAKPOINT,
  BreakpointService,
  CurrentProductService,
} from '@spartacus/storefront';
import { Product, AuthService } from '@spartacus/core';
import { Observable, combineLatest } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-dvnt-product-details',
  templateUrl: './dvnt-product-details.component.html',
  styleUrls: ['./dvnt-product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DvntProductDetailsComponent implements OnInit {
  public isMobileView$: Observable<boolean>;
  public product$: Observable<Product>;
  public outOfStock$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private currentProductService: CurrentProductService,
    private breakpointService: BreakpointService
  ) {
    this.product$ = this.currentProductService.getProduct();

    this.isMobileView$ = this.breakpointService.breakpoint$.pipe(
      map((breakpoint) => breakpoint === BREAKPOINT.xs)
    );
  }

  ngOnInit() {
    this.outOfStock$ = combineLatest([
      this.currentProductService.getProduct().pipe(filter(Boolean)),
      this.authService.getOccUserId(),
    ]).pipe(
      map(
        ([product]: [Product, String]) =>
          !!product.stock && product.stock.stockLevelStatus === 'outOfStock'
      )
    );
  }
}
