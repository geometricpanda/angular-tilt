import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuToggleModule } from '../menu-toggle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './logo.css'],
  standalone: true,
  imports: [
    MenuToggleModule,
    RouterLink,
    RouterLinkActive,
  ]
})
export class HeaderComponent {

}
