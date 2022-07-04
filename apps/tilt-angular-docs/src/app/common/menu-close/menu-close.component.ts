import {Component, HostBinding} from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[app-menu-close]',
  styleUrls: ['./menu-close.component.css'],
  template: `
    <fa-icon [icon]="faTimes"></fa-icon>
  `,
})
export class MenuCloseComponent {

  faTimes = faTimes;

  @HostBinding('class.menu-close')
  private readonly hbClassMenuClose = true;

  @HostBinding('attr.aria-label')
  private readonly hbAttrMenuClose = 'Close Main Menu'

}
