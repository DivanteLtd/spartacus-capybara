import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleGuildeComponent } from './style-guilde/style-guilde.component';
import { RouterModule } from '@angular/router';
import { styleGuideRoutes } from './style-guide.routes';

@NgModule({
  declarations: [StyleGuildeComponent],
  imports: [CommonModule, RouterModule.forChild(styleGuideRoutes)],
})
export class StyleGuideModule {}
