import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvntGlobalMessageComponent } from './dvnt-global-message.component';
import { I18nModule } from '@spartacus/core';

import { DvntSharedModule } from 'src/app/features/dvnt-shared/dvnt-shared.module';

@NgModule({
  declarations: [DvntGlobalMessageComponent],
  imports: [CommonModule, I18nModule, DvntSharedModule],
  exports: [DvntGlobalMessageComponent],
})
export class DvntGlobalMessageModule {}
