import { Component } from '@angular/core';
import { MiniCartComponent, ModalService } from '@spartacus/storefront';
import { CartService } from '@spartacus/core';

import { DvntCartModalComponent } from '../../dvnt-cart/dvnt-cart-modal/dvnt-cart-modal.component';

@Component({
  selector: 'app-dvnt-mini-cart',
  templateUrl: './dvnt-mini-cart.component.html',
  styleUrls: ['./dvnt-mini-cart.component.scss'],
})
export class DvntMiniCartComponent extends MiniCartComponent {
  constructor(
    // tslint:disable-next-line: deprecation
    protected cartService: CartService,
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
  }
}
