import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '@spartacus/storefront';
import { Observable, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Component({
  selector: 'app-dvnt-breadcrumbs',
  templateUrl: './dvnt-breadcrumbs.component.html',
  styleUrls: ['./dvnt-breadcrumbs.component.scss'],
})
export class DvntBreadcrumbsComponent extends BreadcrumbComponent
  implements OnInit {
  private myCrumbs$: Observable<any[]>;

  ngOnInit(): void {
    super.ngOnInit();

    // Use crumbs$ with debounce to skip `Expression has changed after it was checked` error caused by second emit in short time.
    // https://github.com/SAP/cloud-commerce-spartacus-storefront/issues/6086
    // https://github.com/SAP/cloud-commerce-spartacus-storefront/pull/6221
    // @todo: check if this was fixed
    this.myCrumbs$ = this.crumbs$.pipe(debounce(() => timer(10)));
  }
}
