import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  CurrentProductService,
  BreakpointService,
  BREAKPOINT,
} from '@spartacus/storefront';
import { Product } from '@spartacus/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dvnt-product-details',
  templateUrl: './dvnt-product-details.component.html',
  styleUrls: ['./dvnt-product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DvntProductDetailsComponent {
  public isMobileView$: Observable<boolean>;
  public product$: Observable<Product>;

  constructor(
    private currentProductService: CurrentProductService,
    private breakpointService: BreakpointService
  ) {
    this.product$ = this.currentProductService.getProduct();

    this.isMobileView$ = this.breakpointService.breakpoint$.pipe(
      map((breakpoint) => breakpoint === BREAKPOINT.xs)
    );
  }
}
