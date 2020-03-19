import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * Svg icon component.
 * To use icon just pass its filename (without extension) in `icon` property.
 * If no other inputs is passed default values will be used.
 * Color property will set svg fill attribute to set elements color.
 * If svg icon elements contains own fill property then component color property will be ignored.
 * To generate/update sheet file just add new files to `resources/icons` directory and run `yarn generate:icons-sheet`.
 */
@Component({
  selector: 'app-dvnt-icon',
  template: `
    <svg
      [attr.width]="width"
      [attr.height]="height"
      [attr.fill]="color"
      [ngClass]="className"
    >
      <use attr.xlink:href="assets/icons-sheet.svg#{{ icon }}"></use>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DvntIconComponent {
  @Input() icon: string;
  @Input() width = 16;
  @Input() height = 16;
  @Input() color = '#1d1f22';
  @Input() className: string;
}
