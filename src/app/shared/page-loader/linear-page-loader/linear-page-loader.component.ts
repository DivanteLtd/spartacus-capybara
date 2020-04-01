import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  SimpleChanges,
} from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { filter } from 'rxjs/operators';

import { HttpRequestEvent } from '../http-request-event.enum';
import { HttpWatcher } from '../http-watcher.interceptor';

@Component({
  selector: 'app-linear-page-loader',
  templateUrl: './linear-page-loader.component.html',
  styleUrls: ['./linear-page-loader.component.scss'],
})
export class LinearPageLoaderComponent implements OnInit, OnChanges, OnDestroy {
  public backgroundStyle: SafeStyle = null;

  @Input()
  public colorA: string = '#5ece7b';
  @Input()
  public colorB: string = '#a3a5ad';
  @Input()
  public height: number = 3;
  public barHeight: number = this.height;

  private routerSubscription: Subscription = new Subscription();
  private requestsCount: number = 0;
  private isPageReloading: boolean = false;

  constructor(
    @Optional()
    private router: Router,
    private httpWatcher: HttpWatcher,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.initHttpListeners();
    this.initRouterListeners();

    this.updateBackgroundStyle();
    this.updateBarHeight();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('colorA') || changes.hasOwnProperty('colorB')) {
      this.updateBackgroundStyle();
    }

    if (changes.hasOwnProperty('height')) {
      this.updateBarHeight();
    }
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  private initHttpListeners(): void {
    this.routerSubscription.add(
      this.httpWatcher.onReqestEvent
        .pipe(
          filter(
            (event: HttpRequestEvent): boolean =>
              HttpRequestEvent.START === event
          )
        )
        .subscribe((): void => {
          this.incrementRequestsCount();
        }, this.noop)
    );

    this.routerSubscription.add(
      this.httpWatcher.onReqestEvent
        .pipe(
          filter(
            (event: HttpRequestEvent): boolean => HttpRequestEvent.END === event
          )
        )
        .subscribe((): void => {
          this.decrementRequestsCount();
        }, this.noop)
    );
  }

  private initRouterListeners(): void {
    if (null === this.router) {
      return;
    }

    this.routerSubscription.add(
      this.router.events
        .pipe(filter((event): boolean => event instanceof NavigationStart))
        .subscribe((): void => {
          this.isPageReloading = true;
          this.updateBarHeight();
        }, this.noop)
    );

    this.routerSubscription.add(
      this.router.events
        .pipe(
          filter(
            (event): boolean =>
              event instanceof NavigationEnd ||
              event instanceof NavigationError ||
              event instanceof NavigationCancel
          )
        )
        .subscribe((): void => {
          this.isPageReloading = false;
          this.updateBarHeight();
        }, this.noop)
    );
  }

  private incrementRequestsCount(): void {
    this.requestsCount++;
    this.updateBarHeight();
  }

  private decrementRequestsCount(): void {
    this.requestsCount--;
    if (0 === this.requestsCount) {
      this.updateBarHeight();
    }
  }

  private updateBackgroundStyle(): void {
    const pattern =
      'linear-gradient(-45deg, $colorA, $colorB, $colorB, $colorA, $colorA, $colorB, $colorB, $colorA, $colorA)';
    const styleString = pattern
      .replace(/\$colorA/g, this.colorA)
      .replace(/\$colorB/g, this.colorB);

    this.backgroundStyle = this.sanitizer.bypassSecurityTrustStyle(styleString);
  }

  private updateBarHeight(): void {
    const isLoading = this.isPageReloading || this.requestsCount > 0;

    this.barHeight = isLoading ? this.height : 0;
  }

  private noop(): void {}
}
