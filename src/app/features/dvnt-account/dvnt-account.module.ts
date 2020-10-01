import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MediaModule,
  SpinnerModule,
  ListNavigationModule,
} from '@spartacus/storefront';
import { ConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { NgSelectModule } from '@ng-select/ng-select';

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
import { DvntMyInterestsComponent } from './dvnt-my-interests/dvnt-my-interests.component';
import { DvntMyInterestsItemComponent } from './dvnt-my-interests/dvnt-my-interests-item/dvnt-my-interests-item.component';
import { DvntOrderHistoryComponent } from './dvnt-order-history/dvnt-order-history.component';
import { DvntOrderHistoryItemComponent } from './dvnt-order-history/dvnt-order-history-item/dvnt-order-history-item.component';
import { DvntRegisterCustomerComponent } from './dvnt-register-customer/dvnt-register-customer.component';
import { DvntSharedModule } from '../dvnt-shared/dvnt-shared.module';

@NgModule({
  declarations: [
    DvntConsentFormComponent,
    DvntConsentManagementComponent,
    DvntForgotPasswordComponent,
    DvntLoginCustomerComponent,
    DvntMyInterestsComponent,
    DvntMyInterestsItemComponent,
    DvntOrderHistoryComponent,
    DvntOrderHistoryItemComponent,
    DvntRegisterCustomerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    I18nModule,
    UrlModule,
    MediaModule,
    SpinnerModule,
    RouterModule,
    SpinnerModule,
    ListNavigationModule,
    NgSelectModule,
    DvntSharedModule,
    ConfigModule.withConfigFactory(cmsStructureConfig),
    ConfigModule.withConfig(accountTranslationsConfig),
    ConfigModule.withConfig(accountCmsConfig),
    ConfigModule.withConfig(accountLayoutConfig),
  ],
  entryComponents: [
    DvntConsentManagementComponent,
    DvntForgotPasswordComponent,
    DvntLoginCustomerComponent,
    DvntMyInterestsComponent,
    DvntOrderHistoryComponent,
    DvntRegisterCustomerComponent,
  ],
})
export class DvntAccountModule {}
