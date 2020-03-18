import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DvntCarouselComponent } from './dvnt-carousel.component';
import { IconModule } from '@spartacus/storefront';

@NgModule({
  imports: [CommonModule, IconModule],
  declarations: [DvntCarouselComponent],
  exports: [DvntCarouselComponent],
})
export class DvntCarouselModule {}
