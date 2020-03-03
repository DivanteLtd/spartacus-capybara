import { Component } from '@angular/core';
import { LoginComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-login',
  templateUrl: './custom-login.component.html',
})
export class CustomLoginComponent extends LoginComponent {}
