import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {MenuToggleModule} from '../menu-toggle';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MenuToggleModule],
  exports: [HeaderComponent],
})
export class HeaderModule {
}
