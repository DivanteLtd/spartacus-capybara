import { Component } from '@angular/core';
import { AddressBookComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-dvnt-address-book',
  templateUrl: './dvnt-address-book.component.html',
  styleUrls: ['./dvnt-address-book.component.scss'],
})
export class DvntAddressBookComponent extends AddressBookComponent {}
