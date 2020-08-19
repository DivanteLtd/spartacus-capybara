import { Component } from '@angular/core';
import { CmsService, Product } from '@spartacus/core';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { GoogleAnalyticsEventsService } from 'src/app/shared/google-analytics/google-analytics-event.service';
import {
  GoogleEventCategory,
  GoogleActionCategory,
  GoogleLabelCategory,
} from 'src/app/shared/google-analytics/google-analytics.enum';

@Component({
  selector: 'app-dvnt-bestselling-products',
  templateUrl: './dvnt-bestselling-products.component.html',
  styleUrls: ['./dvnt-bestselling-products.component.scss'],
})
export class DvntBestsellingProductsComponent {
  public componentData$: Observable<any> = this.cmsService
    .getComponentData('ElectronicsHomepageProductCarouselComponent')
    .pipe(filter(Boolean));

  constructor(
    private cmsService: CmsService,
    private googleAnalyticsEventsService: GoogleAnalyticsEventsService
  ) {}

  public productSelected(product: Product): void {
    this.googleAnalyticsEventsService.emitEvent(
      GoogleEventCategory.SelectProduct,
      GoogleActionCategory.Bestseller,
      GoogleLabelCategory.ProductCode,
      product.code
    );
  }
}
