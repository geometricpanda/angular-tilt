import { Component, ElementRef, HostBinding, HostListener, inject, OnDestroy, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { skip, Subscription, tap } from 'rxjs';
import { MenuStateService } from '../../services/menu-state.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[app-menu-toggle]',
  styleUrls: ['menu-toggle.component.css'],
  standalone: true,
  imports: [FontAwesomeModule],
  template: `
    <fa-icon [icon]="faBars" />
  `
})
export class MenuToggleComponent implements OnInit, OnDestroy {
  private menuStateService = inject(MenuStateService);
  private elRef: ElementRef<HTMLButtonElement> = inject(ElementRef);

  faBars = faBars;

  menuState$?: Subscription;

  @HostBinding('class.menu-toggle')
  private readonly hbClassMenuToggle = true;

  @HostBinding('attr.aria-label')
  private readonly hbAttrAriaLabel = 'Expand Main Menu';

  @HostBinding('attr.aria-expanded')
  private hbAttrAriaExpanded = false;

  @HostBinding('attr.aria-controls')
  private hbAttrAriaControls = 'menu-navigation';

  @HostBinding('attr.id')
  private readonly hbAttrId = 'menu-toggle';

  @HostListener('click')
  onClick() {
    this.menuStateService.setState(true);
  }

  ngOnInit(): void {
    this.menuState$ = this.menuStateService.currentState
      .pipe(skip(1))
      .pipe(tap((state) => !state && this.elRef.nativeElement.focus()))
      .subscribe(state => this.hbAttrAriaExpanded = state);
  }

  ngOnDestroy(): void {
    this.menuState$?.unsubscribe();
  }
}
