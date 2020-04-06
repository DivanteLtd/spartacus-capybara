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

  private unsubscribe: Subject<any> = new Subject();

  constructor(
    hamburgerMenuService: HamburgerMenuService,
    routingService: RoutingService,
    private googleAnalyticsEventsService: GoogleAnalyticsEventsService,
    private router: Router
  ) {
    super(hamburgerMenuService, routingService);

    this.router.events.pipe(takeUntil(this.unsubscribe)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.googleAnalyticsEventsService.emitSetPage(event.urlAfterRedirects);
        console.log('SET PAGE', event.urlAfterRedirects);
      }
    });
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
