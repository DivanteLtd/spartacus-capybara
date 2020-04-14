import { Component, Input } from '@angular/core';
import { CardComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-dvnt-card',
  templateUrl: './dvnt-card.component.html',
  styleUrls: ['./dvnt-card.component.scss'],
})
export class DvntCardComponent extends CardComponent {
  @Input() color = '';
  @Input() hoverShadow = true;
  @Input() hasShadow = false;
  @Input() className = '';
}
