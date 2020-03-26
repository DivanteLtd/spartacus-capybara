import { Component } from '@angular/core';
import { ModalService } from '@spartacus/storefront';
import { ActiveCartService } from '@spartacus/core';

@Component({
  selector: 'app-dvnt-cart-modal',
  templateUrl: './dvnt-cart-modal.component.html',
  styleUrls: ['./dvnt-cart-modal.component.scss'],
})
export class DvntCartModalComponent {
  public modalServiceRef: ModalService;

  constructor(
    public activeCartService: ActiveCartService,
    private modalService: ModalService
  ) {
    this.modalServiceRef = this.modalService;
  }

  public dismissCartModal() {
    const modal = this.modalServiceRef.getActiveModal();
    modal.dismiss();
  }
}
