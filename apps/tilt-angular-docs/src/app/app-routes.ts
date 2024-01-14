import {Route, Routes} from '@angular/router';

const home: Route = {
  path: '',
  pathMatch: 'full',
  loadComponent: () => import('./pages/home'),
}

const api: Route = {
  path: 'api',
  loadComponent: () => import('./pages/api'),
}

const playground: Route = {
  path: 'playground',
  loadComponent: () => import('./pages/playground'),
}

const demos: Route = {
  path: 'demos',
  loadChildren: () => import('./pages/demos'),
}

export const routes: Routes = [
  home,
  api,
  playground,
  demos,
];
