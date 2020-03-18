import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import {
  ProductImagesComponent,
  CurrentProductService,
} from '@spartacus/storefront';
import {
  SwiperConfigInterface,
  SwiperPaginationInterface,
} from 'ngx-swiper-wrapper';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-dvnt-product-mobile-images',
  templateUrl: './dvnt-product-mobile-images.component.html',
  styleUrls: ['./dvnt-product-mobile-images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DvntProductMobileImagesComponent extends ProductImagesComponent
  implements OnInit {
  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    pagination: false,
  };

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false,
  };

  constructor(
    currentProductService: CurrentProductService,
    private cd: ChangeDetectorRef
  ) {
    super(currentProductService);
    this.config.pagination = this.pagination;
  }

  ngOnInit(): void {
    this.thumbs$ = this.thumbs$.pipe(
      tap(thumbs => {
        if (!thumbs.length) {
          this.config.pagination = false;
          this.cd.detectChanges();
        }
      })
    );
  }
}
