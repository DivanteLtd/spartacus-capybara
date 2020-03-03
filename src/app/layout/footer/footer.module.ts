import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomFooterComponent } from './custom-footer/custom-footer.component';

@NgModule({
  declarations: [CustomFooterComponent],
  imports: [CommonModule],
  entryComponents: [CustomFooterComponent],
})
export class FooterModule {}
