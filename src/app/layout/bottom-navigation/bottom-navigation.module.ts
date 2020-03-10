import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BottomNavigationComponent } from './bottom-navigation.component';

@NgModule({
  declarations: [BottomNavigationComponent],
  imports: [CommonModule],
  entryComponents: [BottomNavigationComponent],
})
export class BottomNavigationModule {}
