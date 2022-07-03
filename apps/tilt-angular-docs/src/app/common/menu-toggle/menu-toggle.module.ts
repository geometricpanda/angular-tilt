import {NgModule} from '@angular/core';
import {MenuToggleComponent} from './menu-toggle.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [MenuToggleComponent],
  imports: [FontAwesomeModule],
  exports: [MenuToggleComponent],
})
export class MenuToggleModule {

}
