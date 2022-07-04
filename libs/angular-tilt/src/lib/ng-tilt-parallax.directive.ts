import {Directive, HostBinding, Input} from '@angular/core';
import {NgTiltDirective} from './ng-tilt.directive';

@Directive({
  selector: '[ngTiltParallax]',
})
export class NgTiltParallaxDirective {

  constructor(private ngTilt: NgTiltDirective) {
  }

  @HostBinding('style.transform')
  private get _hbStyleTransform(): string | null {
    return this.ngTilt.isActive
      ? `translateZ(${this.distance}px)`
      : null;
  }

  @Input() distance = 50;
}
