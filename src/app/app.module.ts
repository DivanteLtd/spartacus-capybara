import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { ConfigModule } from '@spartacus/core';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { DvntSharedModule } from './features/dvnt-shared/dvnt-shared.module';
import { FeatureModule } from './features/feature.module';
import { PageLoaderModule } from './shared/page-loader/page-loader.module';
import { SharedModule } from './shared/shared.module';
import { StorefrontMissingExportsModule } from './storefront-missing-exports/storefront-missing-exports.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    PageLoaderModule,
    BrowserModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://spartacus-demo.eastus.cloudapp.azure.com:8443',
          prefix: '/occ/v2/',
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
    ConfigModule.withConfig({
      pwa: {
        enabled: true,
        addToHomeScreen: true,
      },
    }),
    StorefrontMissingExportsModule,
    SharedModule,
    FeatureModule,
    DvntSharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [{ provide: 'googleTagManagerId', useValue: 'GTM-T7JZFXT' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
