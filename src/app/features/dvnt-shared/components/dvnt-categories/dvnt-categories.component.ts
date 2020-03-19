import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationNode } from '@spartacus/storefront';

@Component({
  selector: 'app-dvnt-categories',
  templateUrl: './dvnt-categories.component.html',
  styleUrls: ['./dvnt-categories.component.scss'],
})
export class DvntCategoriesComponent {
  @Input() categoriesData$: Observable<NavigationNode>;
  @Input() containerClass: string;
}
