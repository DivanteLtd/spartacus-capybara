import { Component } from '@angular/core';
import { ProductListItemComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-dvnt-product-list-item',
  templateUrl: './dvnt-product-list-item.component.html',
  styleUrls: ['./dvnt-product-list-item.component.scss'],
})
export class DvntProductListItemComponent extends ProductListItemComponent {}
