import {NgModule} from '@angular/core';
import {NgTiltModule} from '@geometricpanda/angular-tilt';
import {HomeComponent} from './home.component';
import {HomeRouterModule} from './home-router.module';
import {HeroModule} from '../../common/hero';
import {TypographyModule} from '../../common/typography';
import {HrModule} from '../../common/hr';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRouterModule,
    HeroModule,
    NgTiltModule,
    TypographyModule,
    HrModule,
  ],
  exports: [],
})
export class HomeModule {

}
