import { Component } from '@angular/core';
import { ShippingAddressComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-dvnt-shipping-address',
  templateUrl: './dvnt-shipping-address.component.html',
  styleUrls: ['./dvnt-shipping-address.component.scss'],
})
export class DvntShippingAddressComponent extends ShippingAddressComponent {}
