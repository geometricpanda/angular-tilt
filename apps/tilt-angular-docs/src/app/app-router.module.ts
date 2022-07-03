import {ExtraOptions, Route, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const home: Route = {
  path: '',
  pathMatch: 'full',
  loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule),
}

const routes: Routes = [
  home,
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
