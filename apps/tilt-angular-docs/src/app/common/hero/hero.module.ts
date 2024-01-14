import {NgModule} from '@angular/core';
import {HeroComponent} from './hero.component';

@NgModule({
  imports: [HeroComponent],
  exports: [HeroComponent],
})
export class HeroModule {

}
