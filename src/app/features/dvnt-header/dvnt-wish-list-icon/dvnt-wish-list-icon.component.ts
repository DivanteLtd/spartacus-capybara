import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AuthService, UserService, User } from '@spartacus/core';

@Component({
  selector: 'app-dvnt-wish-list-icon',
  templateUrl: './dvnt-wish-list-icon.component.html',
})
export class DvntWishListIconComponent implements OnInit {
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

  public blockPropagation(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
  }
}
