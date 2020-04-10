import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlModule } from '@spartacus/core';

import {
  accountCmsConfig,
  accountLayoutConfig,
  accountTranslationsConfig,
  cmsStructureConfig,
} from './config/account.config';
import { DvntForgotPasswordComponent } from './dvnt-forgot-password/dvnt-forgot-password.component';
import { DvntLoginCustomerComponent } from './dvnt-login-customer/dvnt-login-customer.component';
import { DvntOrderHistoryComponent } from './dvnt-order-history/dvnt-order-history.component';
import { DvntRegisterCustomerComponent } from './dvnt-register-customer/dvnt-register-customer.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DvntOrderHistoryItemComponent } from './dvnt-order-history/dvnt-order-history-item/dvnt-order-history-item.component';

@NgModule({
  declarations: [
    DvntForgotPasswordComponent,
    DvntLoginCustomerComponent,
    DvntOrderHistoryComponent,
    DvntRegisterCustomerComponent,
    DvntOrderHistoryItemComponent,
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
    DvntForgotPasswordComponent,
    DvntLoginCustomerComponent,
    DvntOrderHistoryComponent,
    DvntRegisterCustomerComponent,
  ],
})
export class DvntAccountModule {}
