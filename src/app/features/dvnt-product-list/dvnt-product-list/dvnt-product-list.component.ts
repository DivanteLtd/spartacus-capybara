import { Component, OnInit } from '@angular/core';
import {
  ModalService,
  PageLayoutService,
  ProductListComponent,
  ProductListComponentService,
  ViewConfig,
  ViewModes,
} from '@spartacus/storefront';
import { DvntProductFacetNavigationComponent } from '../dvnt-product-facet-navigation/dvnt-product-facet-navigation.component';

@Component({
  selector: 'app-dvnt-product-list',
  templateUrl: './dvnt-product-list.component.html',
  styleUrls: ['./dvnt-product-list.component.scss'],
})
export class DvntProductListComponent extends ProductListComponent
  implements OnInit {
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
    this.modalService.open(DvntProductFacetNavigationComponent, {
      windowClass: 'side-modal slide-from-left',
      backdropClass: 'side-modal-backdrop',
      beforeDismiss: () => {
        return new Promise(resolve => {
          // @todo: Add logic to add or remove class from modal to run exit animation before dismiss.
          resolve(true);
        });
      },
    });
  }

  showProductFacetNavigationModal2() {
    this.modalService.open(DvntProductFacetNavigationComponent, {
      windowClass: 'side-modal slide-from-right',
      backdropClass: 'side-modal-backdrop',
      beforeDismiss: () => {
        return new Promise(resolve => {
          // @todo: Add logic to add or remove class from modal to run exit animation before dismiss.
          resolve(true);
        });
      },
    });
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.setViewMode(ViewModes.Grid);
  }
}
