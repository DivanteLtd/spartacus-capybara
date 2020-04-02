import { Component, OnInit } from '@angular/core';
import { CurrentProductService } from '@spartacus/storefront';
import {
  BaseOption,
  VariantType,
  Product,
  VariantQualifier,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { filter, distinctUntilChanged, tap } from 'rxjs/operators';

// MOCK
const baseOptionsCustom: BaseOption[] = [
  {
    options: [
      {
        code: '300717313',
        priceData: {
          currencyIso: 'GBP',
          value: 22.64,
        },
        stock: {
          stockLevel: 23,
        },
        url:
          '/Categories/Streetwear-men/T-Shirts-men/Solo-Parenth-SS/p/300717313',
        variantOptionQualifiers: [
          {
            name: 'Style',
            qualifier: VariantQualifier.STYLE,
            value: 'royal',
          },
          {
            name: 'Size',
            qualifier: VariantQualifier.SIZE,
            value: 'L',
          },
        ],
      },
      {
        code: '300717314',
        priceData: {
          currencyIso: 'GBP',
          value: 22.64,
        },
        stock: {
          stockLevel: 27,
        },
        url:
          '/Categories/Streetwear-men/T-Shirts-men/Solo-Parenth-SS/p/300717314',
        variantOptionQualifiers: [
          {
            name: 'Style',
            qualifier: VariantQualifier.STYLE,
            value: 'royal',
          },
          {
            name: 'Size',
            qualifier: VariantQualifier.SIZE,
            value: 'M',
          },
        ],
      },
      {
        code: '300717315',
        priceData: {
          currencyIso: 'GBP',
          value: 22.64,
        },
        stock: {
          stockLevel: 13,
        },
        url:
          '/Categories/Streetwear-men/T-Shirts-men/Solo-Parenth-SS/p/300717315',
        variantOptionQualifiers: [
          {
            name: 'Style',
            qualifier: VariantQualifier.STYLE,
            value: 'royal',
          },
          {
            name: 'Size',
            qualifier: VariantQualifier.SIZE,
            value: 'S',
          },
        ],
      },
    ],
    selected: {
      code: '300717313',
      priceData: {
        currencyIso: 'GBP',
        value: 22.64,
      },
      stock: {
        stockLevel: 23,
      },
      url:
        '/Categories/Streetwear-men/T-Shirts-men/Solo-Parenth-SS/p/300717313',
      variantOptionQualifiers: [
        {
          name: 'Size',
          qualifier: VariantQualifier.SIZE,
          value: 'L',
        },
      ],
    },
    variantType: VariantType.SIZE,
  },
  {
    options: [
      {
        code: '122800_black',
        priceData: {
          currencyIso: 'GBP',
          value: 22.64,
        },
        stock: {
          stockLevel: 0,
        },
        url:
          '/Categories/Streetwear-men/T-Shirts-men/Solo-Parenth-SS/p/122800_black',
        variantOptionQualifiers: [
          {
            image: {
              format: '30Wx30H',
              url: '',
            },
            name: 'Style',
            qualifier: VariantQualifier.STYLE,
            value: 'black',
          },
        ],
      },
      {
        code: '122800_royal',
        priceData: {
          currencyIso: 'GBP',
          value: 22.64,
        },
        stock: {
          stockLevel: 0,
        },
        url:
          '/Categories/Streetwear-men/T-Shirts-men/Solo-Parenth-SS/p/122800_royal',
        variantOptionQualifiers: [
          {
            image: {
              format: '30Wx30H',
              url: '',
            },
            name: 'Style',
            qualifier: VariantQualifier.STYLE,
            value: 'royal',
          },
        ],
      },
      {
        code: '122800_white',
        priceData: {
          currencyIso: 'GBP',
          value: 22.64,
        },
        stock: {
          stockLevel: 0,
        },
        url:
          '/Categories/Streetwear-men/T-Shirts-men/Solo-Parenth-SS/p/122800_white',
        variantOptionQualifiers: [
          {
            image: {
              format: '30Wx30H',
              url: '',
            },
            name: 'Style',
            qualifier: VariantQualifier.STYLE,
            value: 'white',
          },
        ],
      },
    ],
    selected: {
      code: '122800_royal',
      priceData: {
        currencyIso: 'GBP',
        value: 22.64,
      },
      stock: {
        stockLevel: 0,
      },
      url:
        '/Categories/Streetwear-men/T-Shirts-men/Solo-Parenth-SS/p/122800_royal',
      variantOptionQualifiers: [
        {
          image: {
            format: '30Wx30H',
            url: '',
          },
          name: 'Style',
          qualifier: VariantQualifier.STYLE,
          value: 'royal',
        },
      ],
    },
    variantType: VariantType.STYLE,
  },
];

@Component({
  selector: 'app-dvnt-product-variants',
  templateUrl: './dvnt-product-variants.component.html',
  styleUrls: ['./dvnt-product-variants.component.scss'],
})
export class DvntProductVariantsComponent implements OnInit {
  public variants: BaseOption[] = [];
  public variantType = VariantType;
  public product$: Observable<Product>;

  constructor(private currentProductService: CurrentProductService) {}

  public ngOnInit(): void {
    this.product$ = this.currentProductService.getProduct().pipe(
      filter((product) => !!(product && product.baseOptions)),
      distinctUntilChanged(),
      tap((product) => {
        // MOCK
        let newBaseOptions: BaseOption[] = [];

        newBaseOptions = product.baseOptions.concat(baseOptionsCustom);
        product.baseOptions = newBaseOptions;

        product.baseOptions.forEach((option) => {
          if (option && option.variantType) {
            this.variants[option.variantType] = option;
          }
        });
      })
    );
  }
}
