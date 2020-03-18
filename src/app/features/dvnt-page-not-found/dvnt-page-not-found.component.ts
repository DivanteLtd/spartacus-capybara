import { Component } from '@angular/core';
import { RoutingService } from '@spartacus/core';

@Component({
  selector: 'app-dvnt-page-not-found',
  templateUrl: './dvnt-page-not-found.component.html',
  styleUrls: ['./dvnt-page-not-found.component.scss'],
})
export class DvntPageNotFoundComponent {
  constructor(private routingService: RoutingService) {}

  public navigateToHomePage(): void {
    this.routingService.goByUrl('');
  }

  public navigateToPreviousPage(): void {
    this.routingService.back();
  }
}
