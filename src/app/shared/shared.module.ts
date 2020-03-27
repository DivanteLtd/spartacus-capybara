import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule, UrlModule } from '@spartacus/core';
import { IconModule, MediaModule } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DvntGlobalMessageModule } from './dvnt-global-message/dvnt-global-message.module';

const imports = [
  CommonModule,
  I18nModule,
  IconModule,
  RouterModule,
  UrlModule,
  MediaModule,
  IconModule,
  BrowserAnimationsModule,
];

@NgModule({
  declarations: [],
  imports: imports,
  exports: [imports, DvntGlobalMessageModule],
})
export class SharedModule {}
