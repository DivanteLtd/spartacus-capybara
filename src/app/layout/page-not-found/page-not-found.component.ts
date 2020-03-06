import { Component } from '@angular/core';
import { RoutingService } from '@spartacus/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {
  constructor(private routingService: RoutingService) {}

  public navigateToHomePage(): void {
    this.routingService.goByUrl('');
  }

  public navigateToPreviousPage(): void {
    this.routingService.back();
  }
}
