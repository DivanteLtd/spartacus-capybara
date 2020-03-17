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
  categoriesData$;

  constructor(
    componentData: CmsComponentData<CmsNavigationComponent>,
    service: NavigationService,
    cmsService: CmsService,
    private navigationService: NavigationService
  ) {
    super(componentData, service);
    this.categoriesData$ = this.navigationService.createNavigation(
      cmsService.getComponentData('ElectronicsCategoryNavComponent')
    );
  }
}
