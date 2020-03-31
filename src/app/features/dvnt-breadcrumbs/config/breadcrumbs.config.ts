import { CmsConfig } from '@spartacus/core';
import { DvntBreadcrumbsComponent } from '../dvnt-breadcrumbs/dvnt-breadcrumbs.component';

export const breadcrumbsCmsConfig = <CmsConfig>{
  cmsComponents: {
    BreadcrumbComponent: {
      component: DvntBreadcrumbsComponent,
    },
  },
};
