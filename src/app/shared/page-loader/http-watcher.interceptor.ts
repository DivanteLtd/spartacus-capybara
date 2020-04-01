import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { HttpRequestEvent } from './http-request-event.enum';

@Injectable()
export class HttpWatcher implements HttpInterceptor {
  public onReqestEvent: ReplaySubject<HttpRequestEvent> = new ReplaySubject<
    HttpRequestEvent
  >(10);

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.onReqestEvent.next(HttpRequestEvent.START);

    return next.handle(req).pipe(
      finalize(() => {
        this.onReqestEvent.next(HttpRequestEvent.END);
      })
    );
  }
}
