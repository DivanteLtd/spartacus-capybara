import { NgModule } from '@angular/core';
import { DvntPaginationComponent } from './components/dvnt-pagination/dvnt-pagination.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DvntPaginationComponent],
  imports: [CommonModule],
  exports: [DvntPaginationComponent],
})
export class DvntSharedModule {}
