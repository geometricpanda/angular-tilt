import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatLegacySliderModule as MatSliderModule} from '@angular/material/legacy-slider';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacySlideToggleModule as MatSlideToggleModule} from '@angular/material/legacy-slide-toggle';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgTiltModule} from '@geometricpanda/angular-tilt';


import {PlaygroundRouterModule} from './playground-router.module';
import {PlaygroundComponent} from './playground.component';
import {TypographyModule} from '../../common/typography';
import {HeroModule} from '../../common/hero';
import {PlaygroundToNumberPipe} from './playground-to-number.pipe';
import {PlaygroundToBooleanPipe} from './playground-to-boolean.pipe';
import {PlaygroundToXyStringPipe} from './playground-to-string.pipe';


@NgModule({
  declarations: [
    PlaygroundComponent,
    PlaygroundToNumberPipe,
    PlaygroundToBooleanPipe,
    PlaygroundToXyStringPipe,
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
