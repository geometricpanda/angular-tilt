import {NgModule} from '@angular/core';
import {DemosComponent} from './demos.component';
import {DemosRouterModule} from './demos-router.module';
import {HeroModule} from '../../common/hero';
import {TypographyModule} from '../../common/typography';
import {DemoMusicComponent} from './demo-music/demo-music.component';
import {AnchorModule} from '../../common/anchor';
import {TileModule} from '../../common/tile';

@NgModule({
  declarations: [
    DemosComponent,
    DemoMusicComponent,
  ],
  imports: [
    DemosRouterModule,
    HeroModule,
    TypographyModule,
    AnchorModule,
    TileModule,
  ],
  exports: [],
})
export class DemosModule {

}
