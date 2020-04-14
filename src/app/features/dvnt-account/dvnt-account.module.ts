import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { SpinnerModule } from '@spartacus/storefront';

import {
  accountCmsConfig,
  accountLayoutConfig,
  accountTranslationsConfig,
  cmsStructureConfig,
} from './config/account.config';
import { DvntConsentFormComponent } from './dvnt-consent-management/dvnt-consent-form/dvnt-consent-form.component';
import { DvntConsentManagementComponent } from './dvnt-consent-management/dvnt-consent-management.component';
import { DvntForgotPasswordComponent } from './dvnt-forgot-password/dvnt-forgot-password.component';
import { DvntLoginCustomerComponent } from './dvnt-login-customer/dvnt-login-customer.component';
import { DvntRegisterCustomerComponent } from './dvnt-register-customer/dvnt-register-customer.component';

@NgModule({
  declarations: [
    DvntConsentFormComponent,
    DvntConsentManagementComponent,
    DvntForgotPasswordComponent,
    DvntLoginCustomerComponent,
    DvntRegisterCustomerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    I18nModule,
    UrlModule,
    SpinnerModule,
    RouterModule,
    NgSelectModule,
    ConfigModule.withConfigFactory(cmsStructureConfig),
    ConfigModule.withConfig(accountTranslationsConfig),
    ConfigModule.withConfig(accountCmsConfig),
    ConfigModule.withConfig(accountLayoutConfig),
  ],
  entryComponents: [
    DvntConsentManagementComponent,
    DvntForgotPasswordComponent,
    DvntLoginCustomerComponent,
    DvntRegisterCustomerComponent,
  ],
})
export class DvntAccountModule {}
