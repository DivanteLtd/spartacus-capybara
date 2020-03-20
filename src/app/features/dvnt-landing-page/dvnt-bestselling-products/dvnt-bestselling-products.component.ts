import { Component } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dvnt-bestselling-products',
  templateUrl: './dvnt-bestselling-products.component.html',
  styleUrls: ['./dvnt-bestselling-products.component.scss'],
})
export class DvntBestsellingProductsComponent {
  public componentData$: Observable<any> = this.cmsService
    .getComponentData('ElectronicsHomepageProductCarouselComponent')
    .pipe(filter(Boolean));

  constructor(private cmsService: CmsService) {}
}
