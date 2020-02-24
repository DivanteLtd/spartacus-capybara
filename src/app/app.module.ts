import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { translations, translationChunksConfig } from '@spartacus/assets';
import {
  B2cStorefrontModule,
  GlobalMessageComponentModule,
  OutletModule,
  OutletRefModule,
  PwaModule,
  PageLayoutModule,
  SeoModule,
  PageSlotModule,
} from '@spartacus/storefront';

import { AppComponent } from './app.component';
import { StaticHeaderCmsModule } from './layout/static-header-cms/static-header-cms.module';
import { RouterModule } from '@angular/router';
import { AnonymousConsentsModule, FeaturesConfigModule } from '@spartacus/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl:
            'https://storefront.c39j2-walkersde1-d4-public.model-t.cc.commerce.ondemand.com',
          prefix: '/rest/v2/',
        },
      },
      context: {
        baseSite: ['electronics-spa'],
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
      features: {
        level: '1.4',
        anonymousConsents: true,
      },
    }),
    StaticHeaderCmsModule,

    RouterModule,
    GlobalMessageComponentModule,
    OutletModule,
    OutletRefModule,
    PwaModule,
    PageLayoutModule,
    SeoModule,
    PageSlotModule,
    AnonymousConsentsModule,
    FeaturesConfigModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
