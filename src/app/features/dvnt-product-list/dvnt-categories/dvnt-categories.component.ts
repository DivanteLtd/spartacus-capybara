import { Component } from '@angular/core';
import {
  CategoryNavigationComponent,
  CmsComponentData,
  NavigationService,
} from '@spartacus/storefront';
import {
  CmsComponent,
  CmsNavigationComponent,
  CmsService,
} from '@spartacus/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dvnt-categories',
  templateUrl: './dvnt-categories.component.html',
  styleUrls: ['./dvnt-categories.component.scss'],
})
export class DvntCategoriesComponent extends CategoryNavigationComponent {
  categoriesData = [];

  myNode;

  constructor(
    componentData: CmsComponentData<CmsNavigationComponent>,
    service: NavigationService,
    cmsService: CmsService
  ) {
    super(componentData, service);
    cmsService
      .getComponentData('ElectronicsCategoryNavComponent')
      .pipe(take(1))
      .subscribe(
        (_componentData: CmsNavigationComponent) =>
          (this.categoriesData = _componentData.navigationNode.children)
      );
  }
}
