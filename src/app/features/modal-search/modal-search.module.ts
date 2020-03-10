import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UrlModule, I18nModule } from '@spartacus/core';
import { IconModule, MediaModule } from '@spartacus/storefront';

import { ModalSearchComponent } from './modal-search.component';

@NgModule({
  declarations: [ModalSearchComponent],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    UrlModule,
    I18nModule,
    MediaModule,
  ],
  entryComponents: [ModalSearchComponent],
  exports: [ModalSearchComponent],
})
export class ModalSearchModule {}
