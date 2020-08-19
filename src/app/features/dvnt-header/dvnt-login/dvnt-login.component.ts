import { Component } from '@angular/core';
import { LoginComponent } from '@spartacus/storefront';
import { AuthService, UserService } from '@spartacus/core';

import { GoogleAnalyticsEventsService } from 'src/app/shared/google-analytics/google-analytics-event.service';
import {
  GoogleEventCategory,
  GoogleActionCategory,
} from 'src/app/shared/google-analytics/google-analytics.enum';

@Component({
  selector: 'app-dvnt-login',
  templateUrl: './dvnt-login.component.html',
})
export class DvntLoginComponent extends LoginComponent {
  constructor(
    auth: AuthService,
    userService: UserService,
    private googleAnalyticsEventsService: GoogleAnalyticsEventsService
  ) {
    super(auth, userService);
  }

  public loginEvent(event: Event): void {
    this.blockPropagation(event);

    this.googleAnalyticsEventsService.emitEvent(
      GoogleEventCategory.Navigation,
      GoogleActionCategory.Login
    );
  }

  public blockPropagation(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
  }
}
