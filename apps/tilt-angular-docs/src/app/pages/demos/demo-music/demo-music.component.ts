import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-demo-music',
  templateUrl: './demo-music.component.html',
  styleUrls: ['demo-music.component.css'],
})
export class DemoMusicComponent implements OnInit {

  albums = [
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
    {
      name: 'My lawyer told me to do it',
      img: '/assets/my-lawyer-told-me-to-do-it.jpg',
    },
    {
      name: 'Canadana',
      img: '/assets/canadana.jpg',
    },
    {
      name: 'Dark Side of Pluto',
      img: '/assets/dark-side-of-pluto.jpg',
    },
    {
      name: 'Canadana',
      img: '/assets/canadana.jpg',
    },
    {
      name: 'Dark Side of Pluto',
      img: '/assets/dark-side-of-pluto.jpg',
    },
    {
      name: 'My lawyer told me to do it',
      img: '/assets/my-lawyer-told-me-to-do-it.jpg',
    },
  ];

  constructor(
    private title: Title,
    private meta: Meta,
  ) {
  }

  ngOnInit() {
    this.title.setTitle('Music Album Demo Page | Angular Tilt | Geometric Panda');
    this.meta.addTag({
      name: 'description',
      content: 'A demo music album page showing Angular tilt working with images, and parallaxing styled HTML elements',
    });
  }

}
