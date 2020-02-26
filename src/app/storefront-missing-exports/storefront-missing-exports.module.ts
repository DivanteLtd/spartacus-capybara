import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  GlobalMessageComponentModule,
  OutletModule,
  OutletRefModule,
  PwaModule,
  PageLayoutModule,
  SeoModule,
  PageSlotModule,
  PageComponentModule,
} from '@spartacus/storefront';
import {
  AnonymousConsentsModule,
  FeaturesConfigModule,
  UrlModule,
} from '@spartacus/core';

@NgModule({
  imports: [
    AnonymousConsentsModule,
    CommonModule,
    FeaturesConfigModule,
    GlobalMessageComponentModule,
    OutletModule,
    OutletRefModule,
    PageComponentModule,
    PageLayoutModule,
    PageSlotModule,
    PwaModule,
    RouterModule,
    SeoModule,
    UrlModule,
  ],
  exports: [
    AnonymousConsentsModule,
    FeaturesConfigModule,
    GlobalMessageComponentModule,
    OutletModule,
    OutletRefModule,
    PageComponentModule,
    PageLayoutModule,
    PageSlotModule,
    PwaModule,
    RouterModule,
    SeoModule,
    UrlModule,
  ],
})
export class StorefrontMissingExportsModule {}
