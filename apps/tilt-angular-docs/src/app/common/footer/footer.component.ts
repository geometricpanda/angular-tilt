import { Component, Input } from '@angular/core';
import { MenuItems } from '../navigation.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive]
})
export class FooterComponent {
  @Input() links: MenuItems = [];
}
