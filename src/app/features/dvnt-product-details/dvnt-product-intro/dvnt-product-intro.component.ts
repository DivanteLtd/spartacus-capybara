import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProductIntroComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-dvnt-product-intro',
  templateUrl: './dvnt-product-intro.component.html',
  styleUrls: ['./dvnt-product-intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DvntProductIntroComponent extends ProductIntroComponent {}
