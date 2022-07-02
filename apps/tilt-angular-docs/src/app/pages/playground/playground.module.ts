import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgTiltModule} from '@geometricpanda/angular-tilt';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {PlaygroundRouterModule} from './playground-router.module';
import {PlaygroundComponent} from './playground.component';
import {TypographyModule} from '../../common/typography';
import {HeroModule} from '../../common/hero';
import {PlaygroundToNumberPipe} from './playground-to-number.pipe';
import {PlaygroundToBooleanPipe} from './playground-to-boolean.pipe';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    PlaygroundComponent,
    PlaygroundToNumberPipe,
    PlaygroundToBooleanPipe,
  ],
  imports: [
    PlaygroundRouterModule,
    TypographyModule,
    HeroModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatCardModule,
    NgTiltModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
  ],
  exports: [],
})
export class PlaygroundModule {

}
