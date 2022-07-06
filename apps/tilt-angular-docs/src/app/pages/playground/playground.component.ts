import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {FormControl, FormGroup} from '@angular/forms';
import {faCcMastercard} from '@fortawesome/free-brands-svg-icons/faCcMastercard';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
})
export class PlaygroundComponent implements OnInit {

  faCcMastercard = faCcMastercard

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
  })

  constructor(
    private title: Title,
    private meta: Meta,
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle('Playground | Angular Tilt | Geometric Panda');
    this.meta.addTag({
      name: 'description',
      content: 'Configure Angular Tilt and generate code snippets using our simple playground application.',
    })
  }
}
