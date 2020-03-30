import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DvntCategoriesService {
  public categorySelection: Subject<void> = new Subject<void>();
}
