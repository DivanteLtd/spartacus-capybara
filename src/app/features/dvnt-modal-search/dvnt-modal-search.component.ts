import { Component } from '@angular/core';
import {
  ModalService,
  SearchBoxComponent,
  SearchBoxComponentService,
  SearchBoxConfig,
} from '@spartacus/storefront';
import { Product, RoutingService } from '@spartacus/core';

const DEFAULT_SEARCHBOX_CONFIG: SearchBoxConfig = {
  minCharactersBeforeRequest: 3,
  displayProducts: true,
  displaySuggestions: true,
  maxProducts: 10,
  maxSuggestions: 5,
  displayProductImages: true,
};

@Component({
  selector: 'app-dvnt-modal-search',
  templateUrl: './dvnt-modal-search.component.html',
  styleUrls: ['./dvnt-modal-search.component.scss'],
})
export class DvntModalSearchComponent extends SearchBoxComponent {
  private customConfig: SearchBoxConfig = DEFAULT_SEARCHBOX_CONFIG;

  constructor(
    protected searchBoxComponentService: SearchBoxComponentService,
    private modalService: ModalService,
    private routingService: RoutingService
  ) {
    super(searchBoxComponentService, null);
  }

  public closeModal(): void {
    this.modalService.closeActiveModal();
  }

  public search(query: string): void {
    this.searchBoxComponentService.search(query, this.customConfig);
    this.open();
  }

  public navigateToProductPage(product: Product): void {
    this.routingService.go({
      cxRoute: 'product',
      params: product,
    });
    this.searchBoxComponentService.clearResults();
    this.closeModal();
  }
}
