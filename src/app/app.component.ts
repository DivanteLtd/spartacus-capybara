import { Component } from '@angular/core';

import { StorefrontComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends StorefrontComponent {}
