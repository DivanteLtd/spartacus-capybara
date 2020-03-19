import { Component } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { NavigationService, ModalService } from '@spartacus/storefront';

import { DvntCategoriesComponent } from '../dvnt-categories/dvnt-categories.component';

@Component({
  selector: 'app-dvnt-modal-categories',
  templateUrl: './dvnt-modal-categories.component.html',
  styleUrls: ['./dvnt-modal-categories.component.scss'],
})
export class DvntModalCategoriesComponent extends DvntCategoriesComponent {
  constructor(
    cmsService: CmsService,
    navigationService: NavigationService,
    private modalService: ModalService
  ) {
    super(cmsService, navigationService);
  }

  public closeModal(): void {
    this.modalService.closeActiveModal();
  }
}
