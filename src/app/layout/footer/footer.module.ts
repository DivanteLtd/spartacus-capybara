import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlModule, I18nModule } from '@spartacus/core';

import { CustomFooterComponent } from './custom-footer/custom-footer.component';
import { CustomNavigationUiComponent } from './custom-navigation-ui/custom-navigation-ui.component';
import { IconModule, GenericLinkModule } from '@spartacus/storefront';

@NgModule({
  declarations: [CustomFooterComponent, CustomNavigationUiComponent],
  imports: [
    CommonModule,

    // SPRATACUS
    UrlModule,
    GenericLinkModule,
    IconModule,
    I18nModule,
  ],
  entryComponents: [CustomFooterComponent],
})
export class FooterModule {}
