import {ExtraOptions, PreloadAllModules, Route, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const home: Route = {
  path: '',
  pathMatch: 'full',
  loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule),
}

const api: Route = {
  path: 'api',
  loadChildren: () => import('./pages/api/api.module').then(mod => mod.ApiModule),
}

const playground: Route = {
  path: 'playground',
  loadChildren: () => import('./pages/playground/playground.module').then(mod => mod.PlaygroundModule),
}

const demos: Route = {
  path: 'demos',
  loadChildren: () => import('./pages/demos/demos.module').then(mod => mod.DemosModule),
}

const routes: Routes = [
  home,
  api,
  playground,
  demos,
];

const options: ExtraOptions = {
  initialNavigation: 'enabledBlocking',
  preloadingStrategy: PreloadAllModules,
}

@NgModule({
  imports: [RouterModule.forRoot(routes, options)],
  exports: [RouterModule],
})
export class AppRouterModule {

}
