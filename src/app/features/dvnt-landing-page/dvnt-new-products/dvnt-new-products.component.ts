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
  selector: 'app-dvnt-new-products',
  templateUrl: './dvnt-new-products.component.html',
  styleUrls: ['./dvnt-new-products.component.scss'],
})
export class DvntNewProductsComponent {
  public componentData$: Observable<any> = this.cmsService
    .getComponentData('NewElectronicsHomepageProductCarouselComponent')
    .pipe(filter(Boolean));

  constructor(
    private cmsService: CmsService,
    private googleAnalyticsEventsService: GoogleAnalyticsEventsService
  ) {}

  public productSelected(product: Product): void {
    this.googleAnalyticsEventsService.emitEvent(
      GoogleEventCategory.SelectProduct,
      GoogleActionCategory.WhatIsNew,
      GoogleLabelCategory.ProductCode,
      product.code
    );
  }
}
