import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UrlModule, I18nModule } from '@spartacus/core';
import { IconModule, MediaModule } from '@spartacus/storefront';

import { DvntModalSearchComponent } from './dvnt-modal-search.component';
import { DvntSharedModule } from '../dvnt-shared/dvnt-shared.module';

@NgModule({
  declarations: [DvntModalSearchComponent],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    UrlModule,
    I18nModule,
    MediaModule,
    DvntSharedModule,
  ],
  entryComponents: [DvntModalSearchComponent],
  exports: [DvntModalSearchComponent],
})
export class DvntModalSearchModule {}
