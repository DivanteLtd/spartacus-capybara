import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found.component';
import {
  ConfigModule,
  CmsConfig,
  CmsPageSlotsConfig,
  ContentSlotComponentData,
  CmsStructureConfig,
} from '@spartacus/core';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfigFactory(cmsStructureConfig),
    ConfigModule.withConfig({
      cmsComponents: {
        PageNotFoundComponent: {
          component: PageNotFoundComponent,
        },
      },
    } as CmsConfig),
    ConfigModule.withConfig({
      layoutSlots: {
        ErrorPageTemplate: {
          slots: ['PageNotFound'],
        },
      },
    }),
  ],
  entryComponents: [PageNotFoundComponent],
})
export class PageNotFoundModule {}

export const staticComponents: {
  [key: string]: ContentSlotComponentData | any;
} = {
  PageNotFoundComponent: {
    typeCode: 'PageNotFoundComponent',
    flexType: 'PageNotFoundComponent',
    uid: 'PageNotFoundComponent',
  },
};

const cmsPageSlotConfig: CmsPageSlotsConfig = {
  PageNotFound: {
    componentIds: ['PageNotFoundComponent'],
  },
};

export function cmsStructureConfig(): CmsStructureConfig {
  return {
    cmsStructure: {
      components: {
        ...staticComponents,
      },
      slots: {
        ...cmsPageSlotConfig,
      },
    },
  };
}
