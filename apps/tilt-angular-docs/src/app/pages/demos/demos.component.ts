import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css'],
})
export class DemosComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
  ) {
  }

  ngOnInit() {
    this.title.setTitle('Demos | Angular Tilt | Geometric Panda');
    this.meta.addTag({
      name: 'description',
      content: 'See how Angular Tilt can surprise and delight your customers with out curation of Angular-Tilt powered demos',
    });
  }

}
