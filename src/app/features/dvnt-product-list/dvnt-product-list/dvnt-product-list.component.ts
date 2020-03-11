import { Component } from '@angular/core';
import {
  ModalService,
  PageLayoutService,
  ProductFacetNavigationComponent,
  ProductListComponent,
  ProductListComponentService,
  ViewConfig,
  ViewModes,
} from '@spartacus/storefront';

@Component({
  selector: 'app-dvnt-product-list',
  templateUrl: './dvnt-product-list.component.html',
  styleUrls: ['./dvnt-product-list.component.scss'],
})
export class DvntProductListComponent extends ProductListComponent {
  viewModes = ViewModes;

  constructor(
    pageLayoutService: PageLayoutService,
    productListComponentService: ProductListComponentService,
    scrollConfig: ViewConfig,
    private modalService: ModalService
  ) {
    super(pageLayoutService, productListComponentService, scrollConfig);
  }

  showProductFacetNavigationModal() {
    this.modalService.open(ProductFacetNavigationComponent, {
      windowClass: 'product-list-filters-modal',
      backdropClass: 'product-list-filters-backdrop',
      beforeDismiss: () => {
        return new Promise(resolve => {
          resolve(true);
        });
      },
    });
  }
}
