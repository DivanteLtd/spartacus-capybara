import { Component } from '@angular/core';
import { Card } from '@spartacus/storefront';

@Component({
  selector: 'app-style-guide',
  templateUrl: './style-guide.component.html',
  styleUrls: ['./style-guide.component.scss'],
})
export class StyleGuideComponent {
  exampleCardContent: Card = {
    header: 'Sample card',
    text: ['This is card content', 'With multiple paragraphs'],
    textBold: 'Bold text',
  };
}
