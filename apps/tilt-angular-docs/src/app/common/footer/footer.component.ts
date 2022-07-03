import {Component, Input} from '@angular/core';
import {MenuItems} from '../navigation.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Input() links: MenuItems = [];
}
