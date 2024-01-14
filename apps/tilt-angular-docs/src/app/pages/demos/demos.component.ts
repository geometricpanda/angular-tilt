import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TypographyComponent } from '../../common/typography';
import { HeroComponent } from '../../common/hero';
import { RouterLink } from '@angular/router';
import { TileComponent } from '../../common/tile';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css'],
  imports: [
    TypographyComponent,
    HeroComponent,
    RouterLink,
    TileComponent,
    NgOptimizedImage
  ],
  standalone: true
})
export class DemosComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit() {
    this.title.setTitle('Demos | Angular Tilt | Geometric Panda');
    this.meta.addTag({
      name: 'description',
      content: 'See how Angular Tilt can surprise and delight your customers with out curation of Angular-Tilt powered demos'
    });
  }

}
