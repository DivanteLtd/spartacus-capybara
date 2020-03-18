import { Component } from '@angular/core';
import {
  CategoryNavigationComponent,
  CmsComponentData,
  NavigationService,
  NavigationNode,
} from '@spartacus/storefront';
import { CmsNavigationComponent, CmsService } from '@spartacus/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dvnt-categories',
  templateUrl: './dvnt-categories.component.html',
  styleUrls: ['./dvnt-categories.component.scss'],
})
export class DvntCategoriesComponent extends CategoryNavigationComponent {
  public categoriesData$: Observable<NavigationNode>;

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
