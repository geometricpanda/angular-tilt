import {NgModule} from '@angular/core';
import {ApiComponent} from './api.component';
import {ApiRouterModule} from './api-router.module';
import {HeroModule} from '../../common/hero';
import {TypographyModule} from '../../common/typography';
import {HrModule} from '../../common/hr';

@NgModule({
  declarations: [ApiComponent],
  imports: [ApiRouterModule, HeroModule, TypographyModule, HrModule],
  exports: [],
})
export class ApiModule {
}
