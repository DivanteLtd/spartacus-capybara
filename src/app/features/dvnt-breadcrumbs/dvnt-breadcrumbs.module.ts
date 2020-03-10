import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvntBreadcrumbsComponent } from './dvnt-breadcrumbs/dvnt-breadcrumbs.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { IconModule } from '@spartacus/storefront';

@NgModule({
  declarations: [DvntBreadcrumbsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ConfigModule.withConfig({
      cmsComponents: {
        BreadcrumbComponent: {
          component: DvntBreadcrumbsComponent,
        },
      },
    } as CmsConfig),
    IconModule,
  ],
  entryComponents: [DvntBreadcrumbsComponent],
})
export class DvntBreadcrumbsModule {}
