import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {DemosComponent} from './demos.component';
import {DemoMusicComponent} from './demo-music/demo-music.component';
import {DemoCarouselComponent} from './demo-carousel/demo-carousel.component';

const home: Route = {
  path: '',
  pathMatch: 'full',
  component: DemosComponent,
};

const music: Route = {
  path: 'music',
  component: DemoMusicComponent,
};

const carousel: Route = {
  path: 'carousel',
  component: DemoCarouselComponent,
};

const routes: Routes = [
  home,
  music,
  carousel,
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemosRouterModule {
}
