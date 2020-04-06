import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map, startWith } from 'rxjs/operators';

import {
  AuthService,
  UserService,
  User,
  WishListService,
} from '@spartacus/core';
import { GoogleAnalyticsEventsService } from 'src/app/shared/google-analytics/google-analytics-event.service';
import {
  GoogleEventCategory,
  GoogleActionCategory,
} from 'src/app/shared/google-analytics/google-analytics.enum';

@Component({
  selector: 'app-dvnt-wish-list-icon',
  templateUrl: './dvnt-wish-list-icon.component.html',
  styleUrls: ['./dvnt-wish-list-icon.component.scss'],
})
export class DvntWishListIconComponent implements OnInit {
  public user$: Observable<User>;
  public quantity$: Observable<
    number
  > = this.wishListService.getWishList().pipe(
    startWith({ totalItems: 0 }),
    map((wishList) => (wishList && wishList.totalItems) || 0)
  );

  constructor(
    private auth: AuthService,
    private googleAnalyticsEventsService: GoogleAnalyticsEventsService,
    private userService: UserService,
    private wishListService: WishListService
  ) {}

  ngOnInit(): void {
    this.user$ = this.auth.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          return this.userService.get();
        } else {
          return of(undefined);
        }
      })
    );
  }

  public goToWishList(event: Event): void {
    this.blockPropagation(event);

    this.googleAnalyticsEventsService.emitEvent(
      GoogleEventCategory.Navigation,
      GoogleActionCategory.WishListRedirect
    );
  }

  private blockPropagation(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
  }
}
