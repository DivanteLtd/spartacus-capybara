import { Component } from '@angular/core';
import { ContentSlotComponentData } from '@spartacus/core';

@Component({
  selector: 'app-dvnt-product-tabs-wrapper',
  templateUrl: './dvnt-product-tabs-wrapper.component.html',
  styleUrls: ['./dvnt-product-tabs-wrapper.component.scss'],
})
export class DvntProductTabsWrapperComponent {
  public dvntProductTabsWrapper: ContentSlotComponentData = {
    uid: 'TabPanelContainer',
    typeCode: 'CMSTabParagraphContainer',
    flexType: 'CMSTabParagraphContainer',
  };
}
