import {Directive, HostBinding, Input} from '@angular/core';
import {NgTiltDirective} from './ng-tilt.directive';

@Directive({
  selector: '[ngTiltParallax]',
})
export class NgTiltParallaxDirective {

  constructor(private ngTilt: NgTiltDirective) {
  }

  @HostBinding('style.transform')
  private get _hbStyleTransform(): string | undefined {
    return `translateZ(${this.distance}px)`;
  }

  @HostBinding('style.transition')
  private get _hbStyleTransition(): string | undefined {
    return this.ngTilt._hbStyleTransition;
  }

  @Input() distance = 50;
}
