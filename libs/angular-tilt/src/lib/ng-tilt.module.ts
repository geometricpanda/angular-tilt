import {NgModule} from '@angular/core';
import {NgTiltDirective} from './ng-tilt.directive';
import {NgTiltParallaxDirective} from './ng-tilt-parallax.directive';

@NgModule({
  declarations: [NgTiltDirective, NgTiltParallaxDirective],
  exports: [NgTiltDirective, NgTiltParallaxDirective],
})
export class NgTiltModule {
}
