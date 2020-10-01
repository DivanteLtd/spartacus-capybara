import { Component } from '@angular/core';
import { StockNotificationComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-dvnt-stock-notification',
  templateUrl: './dvnt-stock-notification.component.html',
  styleUrls: ['./dvnt-stock-notification.component.scss'],
})
export class DvntStockNotificationComponent extends StockNotificationComponent {}
