import { Component, Input } from '@angular/core';
import { CartVoucherService, Voucher } from '@spartacus/core';
import { ICON_TYPE } from '@spartacus/storefront';

/**
 * Needed to recreate logic from core. AppliedCouponsComponent is not available in public api.
 */
@Component({
  selector: 'app-dvnt-applied-coupons',
  templateUrl: './dvnt-applied-coupons.component.html',
  styleUrls: ['./dvnt-applied-coupons.component.scss'],
})
export class DvntAppliedCouponsComponent {
  @Input()
  vouchers: Voucher[];
  @Input()
  cartIsLoading = false;
  @Input()
  isReadOnly = false;

  iconTypes = ICON_TYPE;

  constructor(private cartVoucherService: CartVoucherService) {}

  public get sortedVouchers(): Voucher[] {
    this.vouchers = this.vouchers || [];
    return this.vouchers.slice().sort((a, b) => {
      return a.code.localeCompare(b.code);
    });
  }

  removeVoucher(voucherId: string) {
    this.cartVoucherService.removeVoucher(voucherId);
  }
}
