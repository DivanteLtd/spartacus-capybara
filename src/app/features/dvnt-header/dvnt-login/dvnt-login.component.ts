import { Component } from '@angular/core';
import { LoginComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-dvnt-login',
  templateUrl: './dvnt-login.component.html',
})
export class DvntLoginComponent extends LoginComponent {
  public blockPropagation(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
  }
}
