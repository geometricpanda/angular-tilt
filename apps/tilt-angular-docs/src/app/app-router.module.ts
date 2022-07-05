import {ExtraOptions, Route, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const home: Route = {
  path: '',
  pathMatch: 'full',
  loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule),
}

const playground: Route = {
  path: 'playground',
  loadChildren: () => import('./pages/playground/playground.module').then(mod => mod.PlaygroundModule),
}

const routes: Routes = [
  home,
  playground,
];

const options: ExtraOptions = {
  initialNavigation: 'enabledBlocking',
}

@NgModule({
  imports: [RouterModule.forRoot(routes, options)],
  exports: [RouterModule],
})
export class AppRouterModule {

}
