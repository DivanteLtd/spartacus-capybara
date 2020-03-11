import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule } from '@spartacus/core';

const importsToExport = [I18nModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...importsToExport],
  exports: importsToExport,
})
export class SharedModule {}
