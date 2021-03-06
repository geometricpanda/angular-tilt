import {Component} from '@angular/core';
import {faHouseChimney} from '@fortawesome/free-solid-svg-icons/faHouseChimney';
import {faBook} from '@fortawesome/free-solid-svg-icons/faBook';
import {faImage} from '@fortawesome/free-solid-svg-icons/faImage';
import {faGithubAlt} from '@fortawesome/free-brands-svg-icons/faGithubAlt';
import {faNpm} from '@fortawesome/free-brands-svg-icons/faNpm';
import {faGamepad} from '@fortawesome/free-solid-svg-icons/faGamepad';

import {MenuItems} from './common/navigation.interface';
import {ModalityService} from './services/modality.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(public modalityService: ModalityService) {
  }

  links: MenuItems = [
    {url: '/', title: 'Home', type: 'routerlink', icon: faHouseChimney},
    {url: '/api', title: 'API', type: 'routerlink', icon: faBook},
    {url: '/playground', title: 'Playground', type: 'routerlink', icon: faGamepad},
    {url: '/demos', title: 'Demos', type: 'routerlink', icon: faImage},
    {url: 'https://github.com/geometricpanda/angular-tilt', title: 'GitHub', type: 'link', icon: faGithubAlt},
    {url: 'https://npmjs.com/package/@geometricpanda/angular-tilt', title: 'NPM', type: 'link', icon: faNpm},
  ]
}
