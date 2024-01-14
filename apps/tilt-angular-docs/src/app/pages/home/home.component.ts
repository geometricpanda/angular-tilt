import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NgTiltModule } from '@geometricpanda/angular-tilt';

import { HeroModule } from '../../common/hero';
import { TypographyModule } from '../../common/typography';
import { HrModule } from '../../common/hr';
import { AnchorModule } from '../../common/anchor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    HeroModule,
    NgTiltModule,
    TypographyModule,
    HrModule,
    AnchorModule
  ]
})
export class HomeComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta) {
  }

  ngOnInit() {
    this.title.setTitle('Angular Tilt | Geometric Panda');
    this.meta.addTag({
      name: 'description',
      content: 'Angular Tilt is a native angular port of Tilt.js'
    });
  }
}
