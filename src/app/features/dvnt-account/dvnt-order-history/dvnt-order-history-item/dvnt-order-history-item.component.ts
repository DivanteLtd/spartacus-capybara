import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { OrderHistory } from '@spartacus/core';

@Component({
  selector: 'app-dvnt-order-history-item',
  templateUrl: './dvnt-order-history-item.component.html',
  styleUrls: ['./dvnt-order-history-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DvntOrderHistoryItemComponent {
  @Input() public order: OrderHistory;
}
