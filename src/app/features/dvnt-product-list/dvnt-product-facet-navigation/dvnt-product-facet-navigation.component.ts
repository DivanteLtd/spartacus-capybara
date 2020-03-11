import { Component } from '@angular/core';
import {
  ModalService,
  ProductFacetNavigationComponent,
  ProductListComponentService,
} from '@spartacus/storefront';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dvnt-product-facet-navigation',
  templateUrl: './dvnt-product-facet-navigation.component.html',
  styleUrls: ['./dvnt-product-facet-navigation.component.scss'],
})
export class DvntProductFacetNavigationComponent extends ProductFacetNavigationComponent {
  modalServiceRef: ModalService;
  constructor(
    modalService: ModalService,
    activatedRoute: ActivatedRoute,
    productListComponentService: ProductListComponentService
  ) {
    super(modalService, activatedRoute, productListComponentService);
    this.modalServiceRef = modalService;
  }

  dismissFiltersModal() {
    const modal = this.modalServiceRef.getActiveModal();
    modal.dismiss();
  }
}
