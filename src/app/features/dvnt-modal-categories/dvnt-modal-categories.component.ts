import { Component } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { NavigationService, ModalService } from '@spartacus/storefront';
import { DvntCategoriesWrapperComponent } from '../dvnt-categories-wrapper/dvnt-categories-wrapper.component';

@Component({
  selector: 'app-dvnt-modal-categories',
  templateUrl: './dvnt-modal-categories.component.html',
  styleUrls: ['./dvnt-modal-categories.component.scss'],
})
export class DvntModalCategoriesComponent extends DvntCategoriesWrapperComponent {
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
