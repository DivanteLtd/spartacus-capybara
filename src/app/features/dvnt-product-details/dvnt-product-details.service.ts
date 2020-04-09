import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DvntProductDetailsService {
  public redirectToReviews: Subject<void> = new Subject<void>();
}
