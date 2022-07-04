import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {MenuToggleModule} from '../menu-toggle';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MenuToggleModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {
}
