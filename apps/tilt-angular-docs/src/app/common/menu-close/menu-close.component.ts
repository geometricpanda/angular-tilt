import { Component, ElementRef, HostBinding } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[app-menu-close]',
  styleUrls: ['./menu-close.component.css'],
  template: `
    <fa-icon [icon]="faTimes" />
  `,
  imports: [FontAwesomeModule],
  standalone: true
})
export class MenuCloseComponent {

  faTimes = faTimes;

  @HostBinding('class.menu-close')
  private readonly hbClassMenuClose = true;

  @HostBinding('attr.aria-label')
  private readonly hbAttrMenuClose = 'Close Main Menu';

  constructor(private elRef: ElementRef<HTMLButtonElement>) {
  }

  focus() {
    this.elRef.nativeElement.focus();
  }

}
