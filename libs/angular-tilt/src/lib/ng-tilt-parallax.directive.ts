import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[ngTiltParallax]',
})
export class NgTiltParallaxDirective {

  @HostBinding('style.transform')
  private get _hbStyleTransform(): string {
    return `translateZ(${this.distance}px)`;
  }

  @Input() distance = 50;
}
