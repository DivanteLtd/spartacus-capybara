import { Component } from '@angular/core';
import {
  HamburgerMenuService,
  StorefrontComponent,
} from '@spartacus/storefront';
import { ContentSlotComponentData, RoutingService } from '@spartacus/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GoogleTagManagerService],
})
export class AppComponent extends StorefrontComponent {
  public footerComponent: ContentSlotComponentData = {
    uid: 'FooterNavigationComponent',
    typeCode: 'FooterNavigationComponent',
    flexType: 'FooterNavigationComponent',
  };

  constructor(
    hamburgerMenuService: HamburgerMenuService,
    routingService: RoutingService,
    private gtmService: GoogleTagManagerService,
    private router: Router
  ) {
    super(hamburgerMenuService, routingService);

    this.router.events.forEach((item) => {
      if (item instanceof NavigationEnd) {
        console.log('NAVIGATION END');

        const gtmTag = {
          event: 'page',
          pageName: item.url,
        };
        console.log('gtmTag', gtmTag);

        this.gtmService.pushTag(gtmTag);
      }
    });
  }
}
