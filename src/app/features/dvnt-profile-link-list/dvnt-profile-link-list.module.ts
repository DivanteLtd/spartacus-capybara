import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DvntProfileLinkListComponent } from './dvnt-profile-link-list.component';

@NgModule({
  declarations: [DvntProfileLinkListComponent],
  imports: [CommonModule, RouterModule],
  entryComponents: [DvntProfileLinkListComponent],
})
export class DvntProfileLinkListModule {}
