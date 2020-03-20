import { Component } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dvnt-new-products',
  templateUrl: './dvnt-new-products.component.html',
  styleUrls: ['./dvnt-new-products.component.scss'],
})
export class DvntNewProductsComponent {
  public componentData$: Observable<any> = this.cmsService
    .getComponentData('NewElectronicsHomepageProductCarouselComponent')
    .pipe(filter(Boolean));

  constructor(private cmsService: CmsService) {}
}
