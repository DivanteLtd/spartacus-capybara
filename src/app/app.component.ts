import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {
  StorefrontComponent,
  HamburgerMenuService,
} from '@spartacus/storefront';
import { ContentSlotComponentData, RoutingService } from '@spartacus/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { GoogleAnalyticsEventsService } from './shared/google-analytics/google-analytics-event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends StorefrontComponent implements OnDestroy {
  public footerComponent: ContentSlotComponentData = {
    uid: 'FooterNavigationComponent',
    typeCode: 'FooterNavigationComponent',
    flexType: 'FooterNavigationComponent',
  };

  private routerEventsSubscription: Subject<any> = new Subject();

  constructor(
    hamburgerMenuService: HamburgerMenuService,
    routingService: RoutingService,
    private googleAnalyticsEventsService: GoogleAnalyticsEventsService,
    private router: Router
  ) {
    super(hamburgerMenuService, routingService);

    this.router.events
      .pipe(takeUntil(this.routerEventsSubscription))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.googleAnalyticsEventsService.emitSetPage(
            event.urlAfterRedirects
          );
        }
      });
  }

  public ngOnDestroy(): void {
    this.routerEventsSubscription.next();
    this.routerEventsSubscription.complete();
  }
}
