import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {ApiComponent} from './api.component';

const home: Route = {
  path: '',
  component: ApiComponent,
}

const routes: Routes = [
  home,
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiRouterModule {
}
