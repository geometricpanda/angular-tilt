import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HeroComponent } from '../../common/hero';
import { TypographyComponent } from '../../common/typography';
import { HrComponent } from '../../common/hr';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
  standalone: true,
  imports: [
    HeroComponent,
    TypographyComponent,
    HrComponent
  ]
})
export class ApiComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit() {
    this.title.setTitle('API documentation | Angular Tilt | Geometric Panda');
    this.meta.addTag({
      name: 'description',
      content: 'API documentation to support the @geometricpanda/angular-tilt directives.'
    });
  }
}
