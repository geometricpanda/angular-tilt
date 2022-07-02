import {NgModule} from '@angular/core';
import {TiltDirective} from './tilt.directive';
import {TiltChildDirective} from './tilt-child.directive';

@NgModule({
  declarations: [TiltDirective, TiltChildDirective],
  exports: [TiltDirective, TiltChildDirective],
})
export class TiltModule {
}
