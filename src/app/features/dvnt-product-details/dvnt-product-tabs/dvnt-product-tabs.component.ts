import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
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
    private breakpointService: BreakpointService
  ) {
    super(componentData, cmsService, winRef);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.componentSubscription.add(this.subscribeToBreakpointChanges());
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
