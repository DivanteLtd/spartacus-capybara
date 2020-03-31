import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlModule } from '@spartacus/core';

import { DvntRegisterCustomerComponent } from './dvnt-register-customer/dvnt-register-customer.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DvntLoginCustomerComponent } from './dvnt-login-customer/dvnt-login-customer.component';
import { DvntForgotPasswordComponent } from './dvnt-forgot-password/dvnt-forgot-password.component';
import {
  accountCmsConfig,
  accountLayoutConfig,
  accountTranslationsConfig,
  cmsStructureConfig,
} from './config/account.config';

@NgModule({
  declarations: [
    DvntRegisterCustomerComponent,
    DvntLoginCustomerComponent,
    DvntForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    I18nModule,
    UrlModule,
    RouterModule,
    NgSelectModule,
    ConfigModule.withConfigFactory(cmsStructureConfig),
    ConfigModule.withConfig(accountTranslationsConfig),
    ConfigModule.withConfig(accountCmsConfig),
    ConfigModule.withConfig(accountLayoutConfig),
  ],
  entryComponents: [
    DvntRegisterCustomerComponent,
    DvntLoginCustomerComponent,
    DvntForgotPasswordComponent,
  ],
})
export class DvntAccountModule {}
