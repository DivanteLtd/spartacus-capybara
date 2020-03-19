import { Component } from '@angular/core';
import { NavigationService, NavigationNode } from '@spartacus/storefront';
import { CmsService } from '@spartacus/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dvnt-categories',
  templateUrl: './dvnt-categories.component.html',
  styleUrls: ['./dvnt-categories.component.scss'],
})
export class DvntCategoriesComponent {
  public categoriesData$: Observable<NavigationNode>;

  constructor(
    private cmsService: CmsService,
    private navigationService: NavigationService
  ) {
    this.categoriesData$ = this.navigationService.createNavigation(
      this.cmsService.getComponentData('ElectronicsCategoryNavComponent')
    );
  }
}
