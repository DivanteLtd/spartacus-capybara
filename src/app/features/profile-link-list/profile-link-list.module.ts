import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProfileLinkListComponent } from './profile-link-list.component';

@NgModule({
  declarations: [ProfileLinkListComponent],
  imports: [CommonModule, RouterModule],
  entryComponents: [ProfileLinkListComponent],
})
export class ProfileLinkListModule {}
