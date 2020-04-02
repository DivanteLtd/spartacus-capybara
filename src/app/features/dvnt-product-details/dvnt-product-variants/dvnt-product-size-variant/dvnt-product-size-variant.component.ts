import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {
  Product,
  BaseOption,
  RoutingService,
  VariantOptionQualifier,
  VariantQualifier,
  ProductService,
  ProductScope,
  VariantOption,
  VariantType,
} from '@spartacus/core';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-dvnt-product-size-variant',
  templateUrl: './dvnt-product-size-variant.component.html',
})
export class DvntProductSizeVariantComponent implements OnInit {
  public sizeForm: FormGroup;
  public _product: Product;

  @Input() set product(value: Product) {
    this._product = value;
    this.setProductDefaults();
  }
  @Input() public variants: BaseOption;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private routingService: RoutingService
  ) {}

  get product(): Product {
    return this._product;
  }

  public ngOnInit(): void {
    this.sizeForm = this.fb.group({
      size: null,
    });

    this.setProductDefaults();
  }

  public changeSize(data: VariantOption): void {
    const code: string = data.code;

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
    const obj = qualifiers.find((q) => q.qualifier === VariantQualifier.SIZE);
    return obj ? obj.value : '';
  }

  private setProductDefaults(): void {
    if (this.sizeForm && this.product) {
      const sizeObject = this.product.baseOptions.find(
        (selectedSize) => selectedSize.variantType === VariantType.SIZE
      );

      this.sizeForm.get('size').setValue(sizeObject.selected);
    }
  }
}
