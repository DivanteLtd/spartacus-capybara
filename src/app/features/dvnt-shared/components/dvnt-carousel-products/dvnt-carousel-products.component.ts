import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  Product,
  ProductScope,
  ProductService,
  FeatureConfigService,
} from '@spartacus/core';
import {
  SwiperConfigInterface,
  SwiperPaginationInterface,
} from 'ngx-swiper-wrapper';
import { BREAKPOINT, BreakpointService } from '@spartacus/storefront';

@Component({
  selector: 'app-dvnt-carousel-products',
  templateUrl: './dvnt-carousel-products.component.html',
  styleUrls: ['./dvnt-carousel-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DvntCarouselProductsComponent implements OnInit, OnDestroy {
  @Input() set componentData(componentData: Observable<any>) {
    this._componentData$ = componentData;
    this.setTitle();
    this.setItems();
  }

  @Input() public title$: Observable<string>;
  @Input() public items$: Observable<Observable<Product>[]>;

  public config: SwiperConfigInterface = {
    autoplay: true,
    navigation: true,
  };

  protected readonly PRODUCT_SCOPE =
    this.features && this.features.isLevel('1.5') ? ProductScope.LIST : '';

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false,
  };
  private _componentData$: Observable<any>;
  private _componentSubscription = new Subscription();

  constructor(
    private breakpointService: BreakpointService,
    private cd: ChangeDetectorRef,
    private productService: ProductService,
    private features?: FeatureConfigService
  ) {
    this.config.pagination = this.pagination;
  }

  ngOnInit(): void {
    this._componentSubscription.add(this.subscribeToBreakpointChanges());
  }

  ngOnDestroy(): void {
    this._componentSubscription.unsubscribe();
  }

  public get componentData$(): Observable<any> {
    return this._componentData$;
  }

  private setTitle(): void {
    this.title$ = this.componentData$.pipe(map((data) => data.title));
  }

  private setItems(): void {
    this.items$ = this.componentData$.pipe(
      map((data) => data.productCodes.trim().split(' ')),
      map((codes) =>
        codes.map((code) => this.productService.get(code, this.PRODUCT_SCOPE))
      )
    );
  }

  private setSlidesPerView(value: number): void {
    this.config.slidesPerView = value;
    this.cd.detectChanges();
  }

  private subscribeToBreakpointChanges(): Subscription {
    return this.breakpointService.breakpoint$.subscribe(
      (breakpoint: BREAKPOINT) => {
        switch (breakpoint) {
          case BREAKPOINT.xs:
            this.setSlidesPerView(1);
            break;

          case BREAKPOINT.sm:
            this.setSlidesPerView(2);
            break;

          case BREAKPOINT.md:
            this.setSlidesPerView(3);
            break;

          default:
            this.setSlidesPerView(4);
            break;
        }
      }
    );
  }
}
