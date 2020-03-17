import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CmsPageSlotsConfig,
  CmsStructureConfig,
  ConfigModule,
  CmsConfig,
  ContentSlotComponentData,
} from '@spartacus/core';

import { DvntBottomNavigationComponent } from './dvnt-bottom-navigation.component';

@NgModule({
  declarations: [DvntBottomNavigationComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfigFactory(cmsStructureConfig),
    ConfigModule.withConfig({
      cmsComponents: {
        DvntBottomNavigationComponent: {
          component: DvntBottomNavigationComponent,
        },
      },
    } as CmsConfig),
    ConfigModule.withConfig({
      layoutSlots: {
        header: {
          xs: {
            slots: ['DvntBottomNavigation'],
          },
        },
      },
    }),
  ],
  entryComponents: [DvntBottomNavigationComponent],
})
export class DvntBottomNavigationModule {}

export const staticComponents: {
  [key: string]: ContentSlotComponentData | any;
} = {
  DvntBottomNavigationComponent: {
    typeCode: 'DvntBottomNavigationComponent',
    flexType: 'DvntBottomNavigationComponent',
    uid: 'DvntBottomNavigationComponent',
  },
};

const cmsPageSlotConfig: CmsPageSlotsConfig = {
  DvntBottomNavigation: {
    componentIds: ['DvntBottomNavigationComponent'],
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
