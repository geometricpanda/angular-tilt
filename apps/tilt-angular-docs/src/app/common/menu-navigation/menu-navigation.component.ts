import {Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MenuItems} from './menu-navigation.interface';
import {filter, Subscription} from 'rxjs';
import {MenuStateService} from '../../services/menu-state.service';

@Component({
  selector: 'app-menu-navigation',
  templateUrl: './menu-navigation.component.html',
  styleUrls: ['./menu-navigation.component.css'],
})
export class MenuNavigationComponent implements OnInit, OnDestroy {

  menuState$?: Subscription;

  @ViewChild('nav', {static: true})
  $nav!: ElementRef<HTMLElement>;

  @Input() links: MenuItems = [];

  @HostListener('keydown.escape')
  onEscapePress() {
    this.doClose();
  }

  constructor(
    public menuStateService: MenuStateService,
  ) {
  }

  ngOnInit(): void {
    this.menuState$ = this.menuStateService
      .currentState
      .pipe(filter((state) => state))
      .subscribe(() => this.$nav.nativeElement.focus())
  }

  ngOnDestroy(): void {
    this.menuState$?.unsubscribe();
  }

  doClose() {
    this.menuStateService.setState(false);
  }


}
