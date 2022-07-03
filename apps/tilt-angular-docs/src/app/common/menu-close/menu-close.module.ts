import {NgModule} from '@angular/core';
import {MenuCloseComponent} from './menu-close.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [MenuCloseComponent],
  imports: [FontAwesomeModule],
  exports: [MenuCloseComponent],
})
export class MenuCloseModule {

}
