import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProductImagesComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-dvnt-product-images',
  templateUrl: './dvnt-product-images.component.html',
  styleUrls: ['./dvnt-product-images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DvntProductImagesComponent extends ProductImagesComponent {}
