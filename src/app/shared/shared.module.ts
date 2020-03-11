import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule } from '@spartacus/core';
import { IconModule } from '@spartacus/storefront';

const imports = [CommonModule, I18nModule, IconModule];

@NgModule({
  declarations: [],
  imports: imports,
  exports: imports,
})
export class SharedModule {}
