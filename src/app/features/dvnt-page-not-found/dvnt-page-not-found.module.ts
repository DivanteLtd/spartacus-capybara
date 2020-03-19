import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ConfigModule,
  CmsConfig,
  CmsPageSlotsConfig,
  ContentSlotComponentData,
  CmsStructureConfig,
} from '@spartacus/core';

import { DvntPageNotFoundComponent } from './dvnt-page-not-found.component';
import { DvntSharedModule } from '../dvnt-shared/dvnt-shared.module';

@NgModule({
  declarations: [DvntPageNotFoundComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfigFactory(cmsStructureConfig),
    ConfigModule.withConfig({
      cmsComponents: {
        DvntPageNotFoundComponent: {
          component: DvntPageNotFoundComponent,
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
    DvntSharedModule,
  ],
  entryComponents: [DvntPageNotFoundComponent],
})
export class DvntPageNotFoundModule {}

export const staticComponents: {
  [key: string]: ContentSlotComponentData | any;
} = {
  DvntPageNotFoundComponent: {
    typeCode: 'DvntPageNotFoundComponent',
    flexType: 'DvntPageNotFoundComponent',
    uid: 'DvntPageNotFoundComponent',
  },
};

const cmsPageSlotConfig: CmsPageSlotsConfig = {
  PageNotFound: {
    componentIds: ['DvntPageNotFoundComponent'],
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
