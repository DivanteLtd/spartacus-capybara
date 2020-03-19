import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NavigationNode } from '@spartacus/storefront';

@Component({
  selector: 'app-dvnt-categories-row',
  templateUrl: './dvnt-categories-row.component.html',
  styleUrls: ['./dvnt-categories-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DvntCategoriesRowComponent {
  @Input() parent: NavigationNode;
}
