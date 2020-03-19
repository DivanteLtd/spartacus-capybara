import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationNode, NavigationService } from '@spartacus/storefront';
import { CmsService } from '@spartacus/core';

@Component({
  selector: 'app-dvnt-categories-wrapper',
  templateUrl: './dvnt-categories-wrapper.component.html',
  styleUrls: ['./dvnt-categories-wrapper.component.scss'],
})
export class DvntCategoriesWrapperComponent {
  public categoriesData$: Observable<NavigationNode>;
  public categoriesContainerClass: string = 'padding-left-20';
  constructor(
    private cmsService: CmsService,
    private navigationService: NavigationService
  ) {
    this.categoriesData$ = this.navigationService.createNavigation(
      this.cmsService.getComponentData('ElectronicsCategoryNavComponent')
    );
  }
}
