import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {PlaygroundComponent} from './playground.component';

const home: Route = {
  path: '',
  pathMatch: 'full',
  component: PlaygroundComponent,
}

const routes: Routes = [
  home,
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaygroundRouterModule {

}
