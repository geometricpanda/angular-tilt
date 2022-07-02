import {Route, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {NgModule} from '@angular/core';

const home: Route = {
  path: '',
  pathMatch: 'full',
  component: HomeComponent,
}

const routes: Routes = [home];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRouterModule {

}
