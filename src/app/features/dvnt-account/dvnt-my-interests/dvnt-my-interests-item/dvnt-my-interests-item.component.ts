import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { ProductInterestEntryRelation, Product } from '@spartacus/core';
import { Observable } from 'rxjs';

interface ProductInterestEntryRelationUI extends ProductInterestEntryRelation {
  product$?: Observable<Product>;
}

@Component({
  selector: 'app-dvnt-my-interests-item',
  templateUrl: './dvnt-my-interests-item.component.html',
  styleUrls: ['./dvnt-my-interests-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DvntMyInterestsItemComponent {
  @Input() public interest: ProductInterestEntryRelationUI;
  @Input() public isRemoveDisabled$: Observable<boolean>;

  @Output() public removeInterest = new EventEmitter<any>();
}
