import { Component } from '@angular/core';
import { MiniCartComponent, ModalService } from '@spartacus/storefront';
import { CartService } from '@spartacus/core';

import { DvntCartModalComponent } from '../../dvnt-cart/dvnt-cart-modal/dvnt-cart-modal.component';
import { GoogleAnalyticsEventsService } from 'src/app/shared/google-analytics/google-analytics-event.service';
import {
  GoogleEventCategory,
  GoogleActionCategory,
  GoogleLabelCategory,
} from 'src/app/shared/google-analytics/google-analytics.enum';

@Component({
  selector: 'app-dvnt-mini-cart',
  templateUrl: './dvnt-mini-cart.component.html',
  styleUrls: ['./dvnt-mini-cart.component.scss'],
})
export class DvntMiniCartComponent extends MiniCartComponent {
  constructor(
    // tslint:disable-next-line: deprecation
    protected cartService: CartService,
    private googleAnalyticsEventsService: GoogleAnalyticsEventsService,
    private modalService: ModalService
  ) {
    super(cartService);
  }

  public showCartModal(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    this.modalService.open(DvntCartModalComponent, {
      windowClass: 'side-modal slide-from-right',
      backdropClass: 'side-modal-backdrop',
    });

    this.googleAnalyticsEventsService.emitEvent(
      GoogleEventCategory.Modal,
      GoogleActionCategory.OpenModal,
      GoogleLabelCategory.DesktopCart
    );
  }
}
