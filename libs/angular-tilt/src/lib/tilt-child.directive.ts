import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[geoTiltChild]',
})
export class TiltChildDirective {

  @HostBinding('style.transform')
  private get _hbStyleTransform(): string {
    return `translateZ(${this.distance}px)`;
  }

  @Input() distance = 50;
}
