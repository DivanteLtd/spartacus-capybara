import { Component, Input, OnInit } from '@angular/core';
import {
  RoutingService,
  Product,
  BaseOption,
  VariantOptionQualifier,
  VariantQualifier,
  VariantOption,
  VariantType,
} from '@spartacus/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dvnt-product-color-variant',
  templateUrl: './dvnt-product-color-variant.component.html',
  styleUrls: ['./dvnt-product-color-variant.component.scss'],
})
export class DvntProductColorVariantComponent implements OnInit {
  public colorForm: FormGroup;
  public _product: Product;

  @Input() set product(value: Product) {
    this._product = value;
    this.setProductDefaults();
  }
  @Input() public variants: BaseOption;

  constructor(
    private fb: FormBuilder,
    private routingService: RoutingService
  ) {}

  get product(): Product {
    return this._product;
  }

  public ngOnInit(): void {
    this.colorForm = this.fb.group({
      color: null,
    });

    this.setProductDefaults();
  }

  public changeColor(data: VariantOption, name: string): void {
    const code: string = data.code;

    if (code) {
      this.routingService.go({
        cxRoute: 'product',
        params: { code, name },
      });
    }
    return null;
  }

  public getVariantOptionValue(qualifiers: VariantOptionQualifier[]) {
    const obj = qualifiers.find((q) => q.qualifier === VariantQualifier.COLOR);
    return obj ? obj.value : '';
  }

  private setProductDefaults(): void {
    if (this.colorForm && this.product) {
      const colorObject = this.product.baseOptions.find(
        (selectedColor) => selectedColor.variantType === VariantType.COLOR
      );

      this.colorForm.get('color').setValue(colorObject.selected);
    }
  }
}
