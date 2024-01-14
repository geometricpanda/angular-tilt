import { booleanAttribute, Component, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[app-type]',
  styleUrls: ['./typography.component.css'],
  template: '<ng-content/>',
  standalone: true
})
export class TypographyComponent {

  @HostBinding('class.type')
  private readonly hbClassType = true;

  @HostBinding('class.type--weight-light')
  private get hbClassTypeWeightLight(): boolean {
    return this.weight === 'light';
  }

  @HostBinding('class.type--weight-regular')
  private get hbClassTypeWeightRegular(): boolean {
    return this.weight === 'regular';
  }

  @HostBinding('class.type--weight-bold')
  private get hbClassTypeWeightBold(): boolean {
    return this.weight === 'bold';
  }

  @HostBinding('class.type--weight-heavy')
  private get hbClassTypeWeightHeavy(): boolean {
    return this.weight === 'heavy';
  }

  @HostBinding('class.type--size-T200')
  private get hbClassTypeSizeT200(): boolean {
    return this.size === 'T200';
  }

  @HostBinding('class.type--size-T300')
  private get hbClassTypeSizeT300(): boolean {
    return this.size === 'T300';
  }

  @HostBinding('class.type--size-T400')
  private get hbClassTypeSizeT400(): boolean {
    return this.size === 'T400';
  }

  @HostBinding('class.type--size-T500')
  private get hbClassTypeSizeT500(): boolean {
    return this.size === 'T500';
  }

  @HostBinding('class.type--size-T600')
  private get hbClassTypeSizeT600(): boolean {
    return this.size === 'T600';
  }

  @HostBinding('class.type--size-T700')
  private get hbClassTypeSizeT700(): boolean {
    return this.size === 'T700';
  }

  @HostBinding('class.type--margin-bottom')
  private get hbClassTypeMarginBottom(): boolean {
    return this.marginBottom;
  }

  @Input() weight: 'light' | 'regular' | 'bold' | 'heavy' = 'regular';
  @Input({ transform: booleanAttribute }) marginBottom: boolean = false;
  @Input() size: 'T200' | 'T300' | 'T400' | 'T500' | 'T600' | 'T700' = 'T300';
}
