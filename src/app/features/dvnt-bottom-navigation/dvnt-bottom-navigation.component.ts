import { Component, OnDestroy } from '@angular/core';
import { RoutingService, AuthService } from '@spartacus/core';
import { ModalService, ModalRef } from '@spartacus/storefront';
import { take } from 'rxjs/operators';

import { DvntModalSearchComponent } from 'src/app/features/dvnt-modal-search/dvnt-modal-search.component';
import { DvntProfileLinkListComponent } from 'src/app/features/dvnt-profile-link-list/dvnt-profile-link-list.component';
import { DvntModalCategoriesComponent } from '../dvnt-modal-categories/dvnt-modal-categories.component';
import { DvntCartModalComponent } from '../dvnt-cart/dvnt-cart-modal/dvnt-cart-modal.component';

@Component({
  selector: 'app-dvnt-bottom-navigation',
  templateUrl: './dvnt-bottom-navigation.component.html',
  styleUrls: ['./dvnt-bottom-navigation.component.scss'],
})
export class DvntBottomNavigationComponent implements OnDestroy {
  private modalRef: ModalRef;

  constructor(
    private authService: AuthService,
    private routingService: RoutingService,
    private modalService: ModalService
  ) {}

  ngOnDestroy(): void {
    if (this.modalRef) {
      this.clearModalRef();
    }
  }

  public navigateTo(path: string, event: Event): void {
    this.preventOtherActions(event);

    this.routingService.goByUrl(path);
  }

  public setSearchAction(event: Event): void {
    this.preventOtherActions(event);
    this.createSearchModal();
  }

  public setCategoriesAction(event: Event): void {
    this.preventOtherActions(event);
    this.createCategoriesModal();
  }

  public setCartAction(event: Event): void {
    this.preventOtherActions(event);
    this.createCartModal();
  }

  public setProfileAction(event: Event): void {
    this.preventOtherActions(event);
    this.authService
      .isUserLoggedIn()
      .pipe(take(1))
      .subscribe(
        (isLogged: boolean) => {
          isLogged
            ? this.createProfileModal()
            : this.routingService.goByUrl('login');
        },
        () => {}
      );
  }

  private createProfileModal(): void {
    this.createModal(DvntProfileLinkListComponent, 'profile');
  }

  private createSearchModal(): void {
    this.createModal(DvntModalSearchComponent, 'search');
  }

  private createCategoriesModal(): void {
    this.createModal(DvntModalCategoriesComponent, 'categories');
  }

  private createCartModal(): void {
    this.createModal(DvntCartModalComponent, 'cart');
  }

  private createModal(component: any, componentType: string): void {
    if (this.modalService.getActiveModal()) {
      if (
        this.modalService.getActiveModal().componentInstance.type ===
        componentType
      ) {
        this.clearModalRef();
      } else {
        this.modalService.dismissActiveModal();
        this.createModelInstance(component, componentType);
      }
    } else {
      this.createModelInstance(component, componentType);
    }
  }

  private createModelInstance(component: any, componentType: string): void {
    let modalInstance: any;

    this.modalRef = this.modalService.open(component, {
      windowClass: 'side-modal slide-from-left',
      backdropClass: 'side-modal-backdrop',
    });

    modalInstance = this.modalRef.componentInstance;
    modalInstance.type = componentType;
  }

  private preventOtherActions(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
  }

  private clearModalRef(): void {
    if (this.modalRef) {
      this.modalService.dismissActiveModal();
      this.modalRef.dismiss();
      this.modalRef = null;
    }
  }
}
