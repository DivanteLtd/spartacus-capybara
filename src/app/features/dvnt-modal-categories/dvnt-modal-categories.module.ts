import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvntModalCategoriesComponent } from './dvnt-modal-categories.component';
import { NavigationModule } from '@spartacus/storefront';
import { CategoriesRowComponent } from './categories-row/categories-row.component';

@NgModule({
  declarations: [DvntModalCategoriesComponent, CategoriesRowComponent],
  imports: [CommonModule, NavigationModule],
  entryComponents: [DvntModalCategoriesComponent, CategoriesRowComponent],
})
export class DvntModalCategoriesModule {}
