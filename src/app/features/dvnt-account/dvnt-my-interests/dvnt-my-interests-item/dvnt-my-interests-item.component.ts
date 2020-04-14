import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ProductInterestEntryRelation } from '@spartacus/core';

@Component({
  selector: 'app-dvnt-my-interests-item',
  templateUrl: './dvnt-my-interests-item.component.html',
  styleUrls: ['./dvnt-my-interests-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DvntMyInterestsItemComponent {
  @Input() public interest: ProductInterestEntryRelation;
}
