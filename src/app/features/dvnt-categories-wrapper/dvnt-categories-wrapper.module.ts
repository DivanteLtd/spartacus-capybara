import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ContentSlotComponentData,
  CmsPageSlotsConfig,
  CmsStructureConfig,
  ConfigModule,
  CmsConfig,
} from '@spartacus/core';

import { DvntCategoriesWrapperComponent } from './dvnt-categories-wrapper.component';
import { DvntSharedModule } from '../dvnt-shared/dvnt-shared.module';

@NgModule({
  declarations: [DvntCategoriesWrapperComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfigFactory(cmsStructureConfig),
    ConfigModule.withConfig({
      cmsComponents: {
        DvntCategoriesWrapperComponent: {
          component: DvntCategoriesWrapperComponent,
        },
      },
    } as CmsConfig),
    ConfigModule.withConfig({
      layoutSlots: {
        ProductListPageTemplate: {
          md: {
            slots: ['DvntCategoriesWrapper', 'ProductListSlot'],
          },
        },
      },
    }),
    DvntSharedModule,
  ],
  entryComponents: [DvntCategoriesWrapperComponent],
})
export class DvntCategoriesWrapperModule {}

export const staticComponents: {
  [key: string]: ContentSlotComponentData | any;
} = {
  DvntCategoriesWrapperComponent: {
    typeCode: 'DvntCategoriesWrapperComponent',
    flexType: 'DvntCategoriesWrapperComponent',
    uid: 'DvntCategoriesWrapperComponent',
  },
};

const cmsPageSlotConfig: CmsPageSlotsConfig = {
  DvntCategoriesWrapper: {
    componentIds: ['DvntCategoriesWrapperComponent'],
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
