import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AuthService, UserService, User } from '@spartacus/core';

@Component({
  selector: 'app-custom-wish-list-icon',
  templateUrl: './custom-wish-list-icon.component.html',
  styleUrls: ['./custom-wish-list-icon.component.scss'],
})
export class CustomWishListIconComponent implements OnInit {
  user$: Observable<User>;

  constructor(private auth: AuthService, private userService: UserService) {}

  ngOnInit(): void {
    this.user$ = this.auth.isUserLoggedIn().pipe(
      switchMap(isUserLoggedIn => {
        if (isUserLoggedIn) {
          return this.userService.get();
        } else {
          return of(undefined);
        }
      })
    );
  }
}
