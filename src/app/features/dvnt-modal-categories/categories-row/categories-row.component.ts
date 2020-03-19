import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NavigationNode } from '@spartacus/storefront';

@Component({
  selector: 'app-categories-row',
  templateUrl: './categories-row.component.html',
  styleUrls: ['./categories-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesRowComponent {
  @Input() parent: NavigationNode;
}
