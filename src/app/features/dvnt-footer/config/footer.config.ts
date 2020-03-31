import { CmsConfig } from '@spartacus/core';

import { DvntFooterComponent } from '../dvnt-footer.component';

export const footerCmsConfig = <CmsConfig>{
  cmsComponents: {
    FooterNavigationComponent: {
      component: DvntFooterComponent,
    },
  },
};
