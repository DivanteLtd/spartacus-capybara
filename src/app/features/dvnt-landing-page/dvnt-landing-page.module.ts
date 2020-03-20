import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CmsStructureConfig,
  ContentSlotComponentData,
  CmsPageSlotsConfig,
  ConfigModule,
  CmsConfig,
} from '@spartacus/core';

import { DvntBestsellingProductsComponent } from './dvnt-bestselling-products/dvnt-bestselling-products.component';
import { DvntBestsellingProductsModule } from './dvnt-bestselling-products/dvnt-bestselling-products.module';
import { DvntNewProductsComponent } from './dvnt-new-products/dvnt-new-products.component';
import { DvntNewProductsModule } from './dvnt-new-products/dvnt-new-products.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DvntBestsellingProductsModule,
    DvntNewProductsModule,
    ConfigModule.withConfigFactory(cmsStructureConfig),
    ConfigModule.withConfig({
      cmsComponents: {
        DvntBestsellingProductsComponent: {
          component: DvntBestsellingProductsComponent,
        },
        DvntNewProductsComponent: {
          component: DvntNewProductsComponent,
        },
      },
    } as CmsConfig),
    ConfigModule.withConfig({
      layoutSlots: {
        LandingPage2Template: {
          slots: [
            'Section1',
            // 'Section2A',
            // 'Section2B',
            'Section2C',
            'DvntBestsellingProducts',
            'DvntNewProducts',
            // 'Section4',
            // 'Section5',
          ],
        },
      },
    }),
  ],
})
export class DvntLandingPageModule {}

export const staticComponents: {
  [key: string]: ContentSlotComponentData | any;
} = {
  DvntBestsellingProductsComponent: {
    typeCode: 'DvntBestsellingProductsComponent',
    flexType: 'DvntBestsellingProductsComponent',
    uid: 'DvntBestsellingProductsComponent',
  },
  DvntNewProductsComponent: {
    typeCode: 'DvntNewProductsComponent',
    flexType: 'DvntNewProductsComponent',
    uid: 'DvntNewProductsComponent',
  },
};

const cmsPageSlotConfig: CmsPageSlotsConfig = {
  DvntBestsellingProducts: {
    componentIds: ['DvntBestsellingProductsComponent'],
  },
  DvntNewProducts: {
    componentIds: ['DvntNewProductsComponent'],
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
