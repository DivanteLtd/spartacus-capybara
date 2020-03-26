import { Component, Output, EventEmitter } from '@angular/core';
import { RoutingService } from '@spartacus/core';

@Component({
  selector: 'app-dvnt-empty-modal-cart',
  templateUrl: './dvnt-empty-modal-cart.component.html',
  styleUrls: ['./dvnt-empty-modal-cart.component.scss'],
})
export class DvntEmptyModalCartComponent {
  @Output() public closeSideBar = new EventEmitter<any>();

  constructor(private routingService: RoutingService) {}

  public goToHomePage(): void {
    this.closeSideBar.emit();
    this.routingService.goByUrl('');
  }
}
