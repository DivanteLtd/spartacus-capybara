import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NavigationNode } from '@spartacus/storefront';

import { DvntCategoriesService } from '../../services/dvnt-categories/dvnt-categories.service';

@Component({
  selector: 'app-dvnt-categories',
  templateUrl: './dvnt-categories.component.html',
  styleUrls: ['./dvnt-categories.component.scss'],
})
export class DvntCategoriesComponent implements OnInit, OnDestroy {
  @Input() public categoriesData$: Observable<NavigationNode>;
  @Input() public containerClass: string;
  @Output() public categorySelected = new EventEmitter<void>();

  private componentSubscription = new Subscription();

  constructor(private categoriesService: DvntCategoriesService) {}

  public ngOnInit(): void {
    this.componentSubscription.add(
      this.categoriesService.categorySelection.subscribe(() =>
        this.categorySelected.emit()
      )
    );
  }

  public ngOnDestroy(): void {
    this.componentSubscription.unsubscribe();
  }
}
