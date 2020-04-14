import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { NgSelectModule } from '@ng-select/ng-select';

import { DvntForgotPasswordComponent } from './dvnt-forgot-password/dvnt-forgot-password.component';
import { DvntLoginCustomerComponent } from './dvnt-login-customer/dvnt-login-customer.component';
import { DvntMyInterestsComponent } from './dvnt-my-interests/dvnt-my-interests.component';
import { DvntMyInterestsItemComponent } from './dvnt-my-interests/dvnt-my-interests-item/dvnt-my-interests-item.component';
import { DvntRegisterCustomerComponent } from './dvnt-register-customer/dvnt-register-customer.component';
import { DvntSharedModule } from '../dvnt-shared/dvnt-shared.module';
import {
  accountCmsConfig,
  accountLayoutConfig,
  accountTranslationsConfig,
  cmsStructureConfig,
} from './config/account.config';

@NgModule({
  declarations: [
    DvntForgotPasswordComponent,
    DvntLoginCustomerComponent,
    DvntMyInterestsComponent,
    DvntMyInterestsItemComponent,
    DvntRegisterCustomerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    I18nModule,
    UrlModule,
    RouterModule,
    NgSelectModule,
    DvntSharedModule,
    ConfigModule.withConfigFactory(cmsStructureConfig),
    ConfigModule.withConfig(accountTranslationsConfig),
    ConfigModule.withConfig(accountCmsConfig),
    ConfigModule.withConfig(accountLayoutConfig),
  ],
  entryComponents: [
    DvntForgotPasswordComponent,
    DvntLoginCustomerComponent,
    DvntMyInterestsComponent,
    DvntRegisterCustomerComponent,
  ],
})
export class DvntAccountModule {}
