import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

import SwiperCore, {Autoplay} from 'swiper';

SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-carousel-demo',
  templateUrl: './demo-carousel.component.html',
  styleUrls: ['./demo-carousel.component.css'],
})
export class DemoCarouselComponent implements OnInit {

  slides = [
    {
      name: 'Dark Side of Pluto',
      img: '/assets/dark-side-of-pluto.jpg',
    },
    {
      name: 'My lawyer told me to do it',
      img: '/assets/my-lawyer-told-me-to-do-it.jpg',
    },
    {
      name: 'Canadana',
      img: '/assets/canadana.jpg',
    },
  ];

  constructor(
    private title: Title,
    private meta: Meta,
  ) {
  }

  ngOnInit() {
    this.title.setTitle('Carousel Demo Page | Angular Tilt | Geometric Panda');
    this.meta.addTag({
      name: 'description',
      content: 'A carousel demo page showing Angular tilt working with SwiperJS, and parallaxing carousel slides',
    });
  }

}
