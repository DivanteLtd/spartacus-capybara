import { animate, style, transition, trigger } from '@angular/animations';

export const facetAnimations = [
  trigger('fadeIn', [
    transition(':enter', [
      style({ height: '0', opacity: 0, padding: '0 8px', margin: '0 2px' }),
      animate(
        '.5s ease-in-out',
        style({
          height: '30px',
          padding: '4px 8px',
          margin: '2px 2px',
          opacity: 1,
        })
      ),
    ]),
    transition(':leave', [
      style({ height: '30px' }),
      animate(
        '.5s ease-in-out',
        style({ height: '0', padding: '0 8px', margin: '0 2px' })
      ),
    ]),
  ]),
];
