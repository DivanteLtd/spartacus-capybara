import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
} from '@angular/core';
import { NavigationNode } from '@spartacus/storefront';
import { DvntCategoriesService } from '../../services/dvnt-categories/dvnt-categories.service';

@Component({
  selector: 'app-dvnt-categories-row',
  templateUrl: './dvnt-categories-row.component.html',
  styleUrls: ['./dvnt-categories-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DvntCategoriesRowComponent {
  @Input() parent: NavigationNode;

  constructor(private categoriesService: DvntCategoriesService) {}

  public selectCategory(): void {
    this.categoriesService.categorySelection.next();
  }
}
