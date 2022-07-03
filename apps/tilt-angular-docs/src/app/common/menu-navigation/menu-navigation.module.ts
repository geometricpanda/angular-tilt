import {NgModule} from '@angular/core';
import {MenuNavigationComponent} from './menu-navigation.component';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';
import {MenuCloseModule} from '../menu-close';
import {A11yModule} from '@angular/cdk/a11y';

@NgModule({
  declarations: [MenuNavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    A11yModule,
    MenuCloseModule,
    FontAwesomeModule,
  ],
  exports: [MenuNavigationComponent],
})
export class MenuNavigationModule {

}
