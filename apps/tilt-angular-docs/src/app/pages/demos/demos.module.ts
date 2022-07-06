import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgTiltModule} from '@geometricpanda/angular-tilt';
import {SwiperModule} from 'swiper/angular';

import {TypographyModule} from '../../common/typography';
import {AnchorModule} from '../../common/anchor';
import {HeroModule} from '../../common/hero';
import {TileModule} from '../../common/tile';

import {DemoCarouselComponent} from './demo-carousel/demo-carousel.component';
import {DemoMusicComponent} from './demo-music/demo-music.component';
import {DemosRouterModule} from './demos-router.module';
import {DemosComponent} from './demos.component';

@NgModule({
  declarations: [
    DemosComponent,
    DemoMusicComponent,
    DemoCarouselComponent,
  ],
  imports: [
    CommonModule,
    DemosRouterModule,
    HeroModule,
    TypographyModule,
    AnchorModule,
    TileModule,
    SwiperModule,
    NgTiltModule,
  ],
  exports: [],
})
export class DemosModule {

}
