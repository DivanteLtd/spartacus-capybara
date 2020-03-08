import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { RouterModule } from '@angular/router';
import { styleGuideRoutes } from './style-guide.routes';

@NgModule({
  declarations: [StyleGuideComponent],
  imports: [CommonModule, RouterModule.forChild(styleGuideRoutes)],
})
export class StyleGuideModule {}
