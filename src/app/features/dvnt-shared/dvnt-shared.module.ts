import { NgModule } from '@angular/core';
import { DvntPaginationComponent } from './components/dvnt-pagination/dvnt-pagination.component';
import { CommonModule } from '@angular/common';
import { DvntIconComponent } from './components/dvnt-icon/dvnt-icon.component';

@NgModule({
  declarations: [DvntPaginationComponent, DvntIconComponent],
  imports: [CommonModule],
  exports: [DvntPaginationComponent, DvntIconComponent],
})
export class DvntSharedModule {}
