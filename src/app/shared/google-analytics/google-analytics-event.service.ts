import { Injectable, isDevMode } from '@angular/core';

import {
  GoogleEventCategory,
  GoogleActionCategory,
  GoogleLabelCategory,
} from './google-analytics.enum';

declare const gtag: Function;

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsEventsService {
  private googleAnalyticsId: string = 'G-D6VTVFJ6E0';

  constructor() {
    if (!isDevMode()) {
      (<any>window).gtag('js', new Date());
      (<any>window).gtag('config', this.googleAnalyticsId);
    }
  }

  public emitSetPage(url: string): void {
    if (!isDevMode()) {
      (<any>window).gtag('set', 'page', url);
      (<any>window).gtag('send', 'pageview');
    }
  }

  public emitEvent(
    eventCategory: GoogleEventCategory,
    eventAction: GoogleActionCategory,
    eventLabel: GoogleLabelCategory = null,
    eventValue: any = null
  ): void {
    if (!isDevMode()) {
      (<any>window).gtag('send', 'event', {
        eventCategory,
        eventLabel,
        eventAction,
        eventValue,
      });
    }
  }
}
