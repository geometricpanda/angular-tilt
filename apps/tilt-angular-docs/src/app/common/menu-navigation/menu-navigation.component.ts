import {Component, HostListener, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {MenuItems} from '../navigation.interface';
import {filter, Subscription} from 'rxjs';
import {MenuStateService} from '../../services/menu-state.service';
import {NavigationEnd, Router} from '@angular/router';
import {MenuCloseComponent} from '../menu-close';

@Component({
  selector: 'app-menu-navigation',
  templateUrl: './menu-navigation.component.html',
  styleUrls: ['./menu-navigation.component.css'],
})
export class MenuNavigationComponent implements OnInit, OnDestroy {

  @ViewChild(MenuCloseComponent, {static: true})
  closeButton!: MenuCloseComponent;

  menuState$?: Subscription;
  routeChange$?: Subscription;

  @Input() links: MenuItems = [];

  @HostListener('keydown.escape')
  onEscapePress() {
    this.doClose();
  }

  constructor(
    public menuStateService: MenuStateService,
    public router: Router,
  ) {
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
