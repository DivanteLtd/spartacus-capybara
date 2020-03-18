import { Component, OnDestroy } from '@angular/core';
import { RoutingService, AuthService } from '@spartacus/core';
import { ModalService, ModalRef } from '@spartacus/storefront';
import { take } from 'rxjs/operators';

import { DvntModalSearchComponent } from 'src/app/features/dvnt-modal-search/dvnt-modal-search.component';
import { DvntProfileLinkListComponent } from 'src/app/features/dvnt-profile-link-list/dvnt-profile-link-list.component';

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
    this.createModal(
      DvntProfileLinkListComponent,
      'modal-full-screen-with-column',
      'profile'
    );
  }

  private createSearchModal(): void {
    this.createModal(DvntModalSearchComponent, 'modal-full-screen', 'search');
  }

  private createModal(
    component: any,
    className: string,
    componentType: string
  ): void {
    if (this.modalService.getActiveModal()) {
      if (
        this.modalService.getActiveModal().componentInstance.type ===
        componentType
      ) {
        this.clearModalRef();
      } else {
        this.modalService.dismissActiveModal();
        this.createModelInstance(component, className, componentType);
      }
    } else {
      this.createModelInstance(component, className, componentType);
    }
  }

  private createModelInstance(
    component: any,
    className: string,
    componentType: string
  ): void {
    let modalInstance: any;

    this.modalRef = this.modalService.open(component, {
      windowClass: className,
      backdrop: false,
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
