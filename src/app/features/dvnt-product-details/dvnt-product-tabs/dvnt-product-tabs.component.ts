import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import {
  TabParagraphContainerComponent,
  CmsComponentData,
  BreakpointService,
  BREAKPOINT,
} from '@spartacus/storefront';
import {
  CMSTabParagraphContainer,
  CmsService,
  WindowRef,
} from '@spartacus/core';
import { Subscription } from 'rxjs';
import { DvntProductDetailsService } from '../dvnt-product-details.service';

@Component({
  selector: 'app-dvnt-product-tabs',
  templateUrl: './dvnt-product-tabs.component.html',
  styleUrls: ['./dvnt-product-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DvntProductTabsComponent extends TabParagraphContainerComponent
  implements OnInit, OnDestroy {
  public isMobileView: boolean = false;

  private componentSubscription = new Subscription();

  constructor(
    componentData: CmsComponentData<CMSTabParagraphContainer>,
    cmsService: CmsService,
    winRef: WindowRef,
    private cd: ChangeDetectorRef,
    private breakpointService: BreakpointService,
    private productDetailsService: DvntProductDetailsService
  ) {
    super(componentData, cmsService, winRef);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.componentSubscription.add(this.subscribeToBreakpointChanges());
    this.componentSubscription.add(this.subscribeToReviewsRedirect());
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();

    this.componentSubscription.unsubscribe();
  }

  select(tabNum: number): void {
    if (this.isMobileView) {
      this.activeTabNum = this.activeTabNum === tabNum ? null : tabNum;
    } else {
      this.activeTabNum = tabNum;
    }
  }

  clickOnTab(index: number): void {
    const tabHeader: HTMLElement = document.getElementById(
      this.generateTabHeaderId(index)
    );

    setTimeout(() => {
      tabHeader.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }, 0);
  }

  generateTabHeaderId(index: number): string {
    return `tab-header-${index}`;
  }

  private subscribeToReviewsRedirect(): Subscription {
    return this.productDetailsService.redirectToReviews.subscribe(() => {
      // Reviews tab has index 2
      this.select(2);
      this.clickOnTab(2);
      this.cd.detectChanges();
    });
  }

  private subscribeToBreakpointChanges(): Subscription {
    return this.breakpointService.breakpoint$.subscribe(
      (breakpoint: BREAKPOINT) => {
        if (breakpoint === BREAKPOINT.xs) {
          this.isMobileView = true;
          this.activeTabNum = null;
        } else {
          this.isMobileView = false;
        }
      }
    );
  }
}
