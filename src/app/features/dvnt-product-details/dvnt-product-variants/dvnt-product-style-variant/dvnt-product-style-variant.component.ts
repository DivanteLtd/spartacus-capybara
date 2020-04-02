import { Component, Input } from '@angular/core';
import {
  Product,
  BaseOption,
  RoutingService,
  VariantOptionQualifier,
  VariantQualifier,
  ProductScope,
  ProductService,
  OccConfig,
} from '@spartacus/core';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-dvnt-product-style-variant',
  templateUrl: './dvnt-product-style-variant.component.html',
  styleUrls: ['./dvnt-product-style-variant.component.scss'],
})
export class DvntProductStyleVariantComponent {
  @Input() public variants: BaseOption;

  constructor(
    private productService: ProductService,
    private routingService: RoutingService,
    private config: OccConfig
  ) {}

  public changeStyle(code: string): void {
    if (code) {
      this.productService
        .get(code, ProductScope.LIST)
        .pipe(
          // below call might looks redundant but in fact this data is going to be loaded anyways
          // we're just calling it earlier and storing
          filter(Boolean),
          take(1)
        )
        .subscribe((product: Product) => {
          this.routingService.go({
            cxRoute: 'product',
            params: product,
          });
        });
    }
    return null;
  }

  public getVariantOptionValue(qualifiers: VariantOptionQualifier[]) {
    const obj = qualifiers.find((q) => q.qualifier === VariantQualifier.COLOR);
    return obj ? obj.value : '';
  }

  public getVariantThumbnailUrl(
    variantOptionQualifiers: VariantOptionQualifier[]
  ): string {
    const qualifier = variantOptionQualifiers.find((item) => item.image);
    return qualifier
      ? `${this.config.backend.occ.baseUrl}${qualifier.image.url}`
      : '';
  }
}
