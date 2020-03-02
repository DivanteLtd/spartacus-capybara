import { Component } from '@angular/core';
import { NavigationUIComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-navigation-ui',
  templateUrl: './custom-navigation-ui.component.html',
  styleUrls: ['./custom-navigation-ui.component.scss'],
})
export class CustomNavigationUiComponent extends NavigationUIComponent {}
