import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {DemosComponent} from './demos.component';
import {DemoMusicComponent} from './demo-music/demo-music.component';

const home: Route = {
  path: '',
  pathMatch: 'full',
  component: DemosComponent,
};

const music: Route = {
  path: 'music',
  pathMatch: 'full',
  component: DemoMusicComponent,
};

const routes: Routes = [
  home,
  music,
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemosRouterModule {
}
