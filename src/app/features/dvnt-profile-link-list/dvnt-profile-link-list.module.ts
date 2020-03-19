import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DvntProfileLinkListComponent } from './dvnt-profile-link-list.component';
import { DvntSharedModule } from '../dvnt-shared/dvnt-shared.module';

@NgModule({
  declarations: [DvntProfileLinkListComponent],
  imports: [CommonModule, RouterModule, DvntSharedModule],
  entryComponents: [DvntProfileLinkListComponent],
})
export class DvntProfileLinkListModule {}
