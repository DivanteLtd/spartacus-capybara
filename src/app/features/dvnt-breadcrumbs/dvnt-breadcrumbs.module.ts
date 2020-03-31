import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { IconModule } from '@spartacus/storefront';

import { breadcrumbsCmsConfig } from './config/breadcrumbs.config';
import { DvntBreadcrumbsComponent } from './dvnt-breadcrumbs/dvnt-breadcrumbs.component';

@NgModule({
  declarations: [DvntBreadcrumbsComponent],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    ConfigModule.withConfig(breadcrumbsCmsConfig),
  ],
  entryComponents: [DvntBreadcrumbsComponent],
})
export class DvntBreadcrumbsModule {}
