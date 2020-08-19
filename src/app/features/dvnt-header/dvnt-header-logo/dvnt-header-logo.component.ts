import { Component } from '@angular/core';
import { GoogleAnalyticsEventsService } from 'src/app/shared/google-analytics/google-analytics-event.service';

import {
  GoogleEventCategory,
  GoogleActionCategory,
  GoogleLabelCategory,
} from 'src/app/shared/google-analytics/google-analytics.enum';

@Component({
  selector: 'app-dvnt-header-logo',
  templateUrl: './dvnt-header-logo.component.html',
})
export class DvntHeaderLogoComponent {
  constructor(
    private googleAnalyticsEventsService: GoogleAnalyticsEventsService
  ) {}

  public goToHomePage(): void {
    this.googleAnalyticsEventsService.emitEvent(
      GoogleEventCategory.Navigation,
      GoogleActionCategory.HomePageRedirect
    );
  }
}
