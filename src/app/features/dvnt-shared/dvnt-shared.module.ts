import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DvntCategoriesComponent } from './components/dvnt-categories/dvnt-categories.component';
import { DvntCategoriesRowComponent } from './components/dvnt-categories-row/dvnt-categories-row.component';
import { DvntIconComponent } from './components/dvnt-icon/dvnt-icon.component';
import { DvntPaginationComponent } from './components/dvnt-pagination/dvnt-pagination.component';

@NgModule({
  declarations: [
    DvntCategoriesComponent,
    DvntCategoriesRowComponent,
    DvntIconComponent,
    DvntPaginationComponent,
  ],
  imports: [CommonModule],
  exports: [
    DvntCategoriesComponent,
    DvntCategoriesRowComponent,
    DvntIconComponent,
    DvntPaginationComponent,
  ],
})
export class DvntSharedModule {}
