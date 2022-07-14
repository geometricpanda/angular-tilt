import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class ApiComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {
  }

  ngOnInit() {
    this.title.setTitle('API documentation | Angular Tilt | Geometric Panda');
    this.meta.addTag({
      name: 'description',
      content: 'API documentation to support the @geometricpanda/angular-tilt directives.'
    })
  }
}
