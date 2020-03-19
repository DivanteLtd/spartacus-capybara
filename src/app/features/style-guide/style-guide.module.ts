import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { RouterModule } from '@angular/router';
import { styleGuideRoutes } from './style-guide.routes';
import { NgSelectModule } from '@ng-select/ng-select';
import { DvntSharedModule } from '../dvnt-shared/dvnt-shared.module';

@NgModule({
  declarations: [StyleGuideComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(styleGuideRoutes),
    NgSelectModule,
    DvntSharedModule,
  ],
})
export class StyleGuideModule {}
