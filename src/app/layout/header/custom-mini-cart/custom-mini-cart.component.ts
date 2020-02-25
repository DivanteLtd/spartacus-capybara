import { Component } from '@angular/core';
import { MiniCartComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-mini-cart',
  templateUrl: './custom-mini-cart.component.html',
  styleUrls: ['./custom-mini-cart.component.scss'],
})
export class CustomMiniCartComponent extends MiniCartComponent {}
