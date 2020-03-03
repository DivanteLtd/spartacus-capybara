import { Component } from '@angular/core';
import { FooterNavigationComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-footer',
  templateUrl: './custom-footer.component.html',
  styleUrls: ['./custom-footer.component.scss'],
})
export class CustomFooterComponent extends FooterNavigationComponent {}
