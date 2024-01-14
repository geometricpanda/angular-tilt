import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons/faCcMastercard';

import { NgTiltModule } from '@geometricpanda/angular-tilt';

import { PlaygroundToNumberPipe } from './playground-to-number.pipe';
import { PlaygroundToBooleanPipe } from './playground-to-boolean.pipe';
import { PlaygroundToXyStringPipe } from './playground-to-string.pipe';
import { TypographyModule } from '../../common/typography';
import { HeroModule } from '../../common/hero';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
  standalone: true,
  imports: [
    MatSliderModule,
    MatCardModule,
    NgTiltModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    PlaygroundToNumberPipe,
    PlaygroundToBooleanPipe,
    PlaygroundToXyStringPipe,
    TypographyModule,
    HeroModule,
    FontAwesomeModule
  ]
})
export class PlaygroundComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  faCcMastercard = faCcMastercard;

  configuratorForm = new FormGroup({
    perspective: new FormControl<number>(400),
    maxTilt: new FormControl<number>(20),
    distance: new FormControl<number>(50),
    easing: new FormControl<string>('cubic-bezier(.03,.98,.52,.99)'),
    scale: new FormControl<number>(1.1),
    speed: new FormControl<number>(400),
    disableAxis: new FormControl<string | undefined>(''),
    reset: new FormControl<boolean>(true),
    glare: new FormControl<boolean>(true),
    maxGlare: new FormControl<number>(0.4),
    global: new FormControl<boolean>(false)
  });


  ngOnInit(): void {
    this.title.setTitle('Playground | Angular Tilt | Geometric Panda');
    this.meta.addTag({
      name: 'description',
      content: 'Configure Angular Tilt and generate code snippets using our simple playground application.'
    });
  }
}
