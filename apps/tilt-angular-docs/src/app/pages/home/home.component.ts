import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
