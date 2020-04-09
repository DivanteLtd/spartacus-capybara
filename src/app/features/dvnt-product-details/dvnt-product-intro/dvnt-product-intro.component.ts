import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  ProductIntroComponent,
  CurrentProductService,
} from '@spartacus/storefront';
import { TranslationService, WindowRef } from '@spartacus/core';

import { DvntProductDetailsService } from '../dvnt-product-details.service';

@Component({
  selector: 'app-dvnt-product-intro',
  templateUrl: './dvnt-product-intro.component.html',
  styleUrls: ['./dvnt-product-intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DvntProductIntroComponent extends ProductIntroComponent {
  constructor(
    currentProductService: CurrentProductService,
    translationService: TranslationService,
    winRef: WindowRef,
    private productDetailsService: DvntProductDetailsService
  ) {
    super(currentProductService, translationService, winRef);
  }

  public goToReviews(): void {
    this.productDetailsService.redirectToReviews.next();
  }
}
