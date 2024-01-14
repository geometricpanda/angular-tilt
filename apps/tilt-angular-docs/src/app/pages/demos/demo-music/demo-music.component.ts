import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { NgTiltDirective, NgTiltParallaxDirective } from '@geometricpanda/angular-tilt';
import { HeroComponent } from '../../../common/hero';
import { TypographyComponent } from '../../../common/typography';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-demo-music',
  templateUrl: './demo-music.component.html',
  styleUrls: ['demo-music.component.css'],
  imports: [
    RouterLink,
    NgTiltDirective,
    NgTiltParallaxDirective,
    HeroComponent,
    TypographyComponent,
    NgOptimizedImage
  ],
  standalone: true
})
export class DemoMusicComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  albums = [
    {
      id: 1,
      name: 'Dark Side of Pluto',
      img: '/assets/dark-side-of-pluto.jpg'
    },
    {
      id: 2,
      name: 'My lawyer told me to do it',
      img: '/assets/my-lawyer-told-me-to-do-it.jpg'
    },
    {
      id: 3,
      name: 'Canadana',
      img: '/assets/canadana.jpg'
    },
    {
      id: 4,
      name: 'My lawyer told me to do it',
      img: '/assets/my-lawyer-told-me-to-do-it.jpg'
    },
    {
      id: 5,
      name: 'Canadana',
      img: '/assets/canadana.jpg'
    },
    {
      id: 6,
      name: 'Dark Side of Pluto',
      img: '/assets/dark-side-of-pluto.jpg'
    },
    {
      id: 7,
      name: 'Canadana',
      img: '/assets/canadana.jpg'
    },
    {
      id: 8,
      name: 'Dark Side of Pluto',
      img: '/assets/dark-side-of-pluto.jpg'
    },
    {
      id: 9,
      name: 'My lawyer told me to do it',
      img: '/assets/my-lawyer-told-me-to-do-it.jpg'
    }
  ];

  ngOnInit() {
    this.title.setTitle('Music Album Demo Page | Angular Tilt | Geometric Panda');
    this.meta.addTag({
      name: 'description',
      content: 'A demo music album page showing Angular tilt working with images, and parallaxing styled HTML elements'
    });
  }

}
