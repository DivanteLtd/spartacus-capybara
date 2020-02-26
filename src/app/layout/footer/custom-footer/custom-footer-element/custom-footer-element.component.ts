import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NavigationNode } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-footer-element',
  templateUrl: './custom-footer-element.component.html',
  styleUrls: ['./custom-footer-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomFooterElementComponent {
  @Input()
  public node: NavigationNode;

  @Input()
  public depth: number = 0;

  constructor() {}

  public isSocialMediaElement(): boolean {
    console.log('&&&&&&&&&&&', this.node);

    return true;
  }
}
