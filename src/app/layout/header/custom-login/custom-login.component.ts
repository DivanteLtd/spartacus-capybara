import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '@spartacus/storefront';
import { Observable } from 'rxjs';

import { User } from '@spartacus/core';

@Component({
  selector: 'app-custom-login',
  templateUrl: './custom-login.component.html',
})
export class CustomLoginComponent extends LoginComponent implements OnInit {
  user$: Observable<User>;

  ngOnInit() {
    super.ngOnInit();
  }
}
