import { Directive, HostBinding, inject, Input, numberAttribute } from '@angular/core';
import { NgTiltDirective } from './ng-tilt.directive';

@Directive({
  selector: '[ngTiltParallax]',
  standalone: true
})
export class NgTiltParallaxDirective {

  ngTilt = inject(NgTiltDirective);

  @HostBinding('style.transform')
  private get _hbStyleTransform(): string | undefined {
    return `translateZ(${this.distance}px)`;
  }

  @HostBinding('style.transition')
  private get _hbStyleTransition(): string | undefined {
    return this.ngTilt._hbStyleTransition;
  }

  @Input({ required: true, transform: numberAttribute }) distance = 50;
}
