import { NgModule } from '@angular/core';
import { LinearPageLoaderComponent } from './linear-page-loader/linear-page-loader.component';
import { HttpWatcher } from './http-watcher.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [LinearPageLoaderComponent],
  providers: [
    HttpWatcher,
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: HttpWatcher,
      multi: true,
    },
  ],
  exports: [LinearPageLoaderComponent],
})
export class PageLoaderModule {}
