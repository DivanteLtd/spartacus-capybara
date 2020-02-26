import { Component } from '@angular/core';

import { StorefrontComponent } from '@spartacus/storefront';
import { ContentSlotComponentData } from '@spartacus/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends StorefrontComponent {
  public footerComponent: ContentSlotComponentData = {
    uid: 'FooterNavigationComponent',
    typeCode: 'FooterNavigationComponent',
    flexType: 'FooterNavigationComponent',
  };
}
