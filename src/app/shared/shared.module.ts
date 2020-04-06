import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule, UrlModule } from '@spartacus/core';
import { IconModule, MediaModule } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { GoogleAnalyticsEventsService } from './google-analytics/google-analytics-event.service';

const imports = [
  CommonModule,
  I18nModule,
  IconModule,
  RouterModule,
  UrlModule,
  MediaModule,
  IconModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [],
  imports: imports,
  exports: imports,
  providers: [GoogleAnalyticsEventsService],
})
export class SharedModule {}
