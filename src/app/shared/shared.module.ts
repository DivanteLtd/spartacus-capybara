import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule, UrlModule } from '@spartacus/core';
import { IconModule, MediaModule } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';

const imports = [
  CommonModule,
  I18nModule,
  IconModule,
  RouterModule,
  UrlModule,
  MediaModule,
  IconModule,
];

@NgModule({
  declarations: [],
  imports: imports,
  exports: imports,
})
export class SharedModule {}
