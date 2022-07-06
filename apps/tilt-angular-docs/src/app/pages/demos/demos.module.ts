import {NgModule} from '@angular/core';
import {DemosComponent} from './demos.component';
import {DemosRouterModule} from './demos-router.module';
import {HeroModule} from '../../common/hero';
import {TypographyModule} from '../../common/typography';
import {DemoMusicComponent} from './demo-music/demo-music.component';
import {AnchorModule} from '../../common/anchor';
import {TileModule} from '../../common/tile';
import {CommonModule} from '@angular/common';
import {NgTiltModule} from '@geometricpanda/angular-tilt';

@NgModule({
  declarations: [
    DemosComponent,
    DemoMusicComponent,
  ],
  imports: [
    CommonModule,
    DemosRouterModule,
    HeroModule,
    TypographyModule,
    AnchorModule,
    TileModule,
    NgTiltModule,
  ],
  exports: [],
})
export class DemosModule {

}
