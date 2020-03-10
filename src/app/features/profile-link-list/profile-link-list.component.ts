import { Component } from '@angular/core';
import { CmsService, RoutingService } from '@spartacus/core';
import {
  NavigationService,
  NavigationNode,
  ModalService,
} from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-link-list',
  templateUrl: './profile-link-list.component.html',
  styleUrls: ['./profile-link-list.component.scss'],
})
export class ProfileLinkListComponent {
  public elements$: Observable<NavigationNode>;

  constructor(
    private cmsService: CmsService,
    private modalService: ModalService,
    private navigationService: NavigationService,
    private routingService: RoutingService
  ) {
    this.elements$ = this.navigationService.createNavigation(
      cmsService.getComponentData('MyAccountComponent')
    );
  }

  public closeModal(): void {
    this.modalService.closeActiveModal();
  }

  public navigateTo(url: string): void {
    this.routingService.goByUrl(url);
    this.closeModal();
  }
}
