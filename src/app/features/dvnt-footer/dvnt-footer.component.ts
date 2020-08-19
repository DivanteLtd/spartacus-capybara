import { Component } from '@angular/core';
import {
  FooterNavigationComponent,
  CmsComponentData,
  NavigationService,
} from '@spartacus/storefront';
import {
  Product,
  CmsNavigationComponent,
  AnonymousConsentsConfig,
} from '@spartacus/core';

import { GoogleAnalyticsEventsService } from 'src/app/shared/google-analytics/google-analytics-event.service';
import {
  GoogleEventCategory,
  GoogleActionCategory,
  GoogleLabelCategory,
} from 'src/app/shared/google-analytics/google-analytics.enum';

@Component({
  selector: 'app-dvnt-footer',
  templateUrl: './dvnt-footer.component.html',
  styleUrls: ['./dvnt-footer.component.scss'],
})
export class DvntFooterComponent extends FooterNavigationComponent {
  constructor(
    anonymousConsentsConfig: AnonymousConsentsConfig,
    componentData: CmsComponentData<CmsNavigationComponent>,
    service: NavigationService,
    private googleAnalyticsEventsService: GoogleAnalyticsEventsService
  ) {
    super(componentData, service, anonymousConsentsConfig);
  }

  public footerSectionSelected(column: string, title: string): void {
    this.googleAnalyticsEventsService.emitEvent(
      GoogleEventCategory.SelectFooterSection,
      GoogleActionCategory.Footer,
      GoogleLabelCategory.FooterSection,
      { column, title }
    );
  }
}
