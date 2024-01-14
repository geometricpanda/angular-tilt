import { Component, HostListener, inject, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { filter, Subscription } from 'rxjs';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';

import { MenuItems } from '../navigation.interface';
import { MenuStateService } from '../../services/menu-state.service';
import { MenuCloseComponent, MenuCloseModule } from '../menu-close';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-menu-navigation',
  templateUrl: './menu-navigation.component.html',
  styleUrls: ['./menu-navigation.component.css'],
  standalone: true,
  imports: [
    A11yModule,
    MenuCloseModule,
    FontAwesomeModule,
    RouterLink,
    RouterLinkActive,
    NgTemplateOutlet,
    AsyncPipe
  ]
})
export class MenuNavigationComponent implements OnInit, OnDestroy {

  public menuStateService = inject(MenuStateService);
  public router = inject(Router);

  @ViewChild(MenuCloseComponent, { static: true })
  closeButton!: MenuCloseComponent;

  menuState$?: Subscription;
  routeChange$?: Subscription;

  @Input() links: MenuItems = [];

  @HostListener('keydown.escape')
  onEscapePress() {
    this.doClose();
  }


  ngOnInit(): void {
    this.menuState$ = this.menuStateService
      .currentState
      .pipe(filter((state) => state))
      .subscribe(() => this.closeButton.focus());

    this.routeChange$ = this.router
      .events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.menuStateService.setState(false));
  }

  ngOnDestroy(): void {
    this.menuState$?.unsubscribe();
  }

  doClose() {
    this.menuStateService.setState(false);
  }


}
