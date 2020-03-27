import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { StorefrontMissingExportsModule } from './storefront-missing-exports/storefront-missing-exports.module';

import { AppComponent } from './app.component';
import { FeatureModule } from './features/feature.module';
import { SharedModule } from './shared/shared.module';
import { DvntSharedModule } from './features/dvnt-shared/dvnt-shared.module';

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
        level: '1.5',
        anonymousConsents: true,
      },
    }),
    StorefrontMissingExportsModule,
    SharedModule,
    FeatureModule,
    DvntSharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
