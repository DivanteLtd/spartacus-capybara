import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomFooterComponent } from './custom-footer/custom-footer.component';
import { StaticFooterCmsModule } from './static-footer-cms/static-footer-cms.module';
import { CustomFooterElementComponent } from './custom-footer/custom-footer-element/custom-footer-element.component';

@NgModule({
  declarations: [CustomFooterComponent, CustomFooterElementComponent],
  imports: [CommonModule, StaticFooterCmsModule],
  entryComponents: [CustomFooterComponent],
})
export class FooterModule {}
