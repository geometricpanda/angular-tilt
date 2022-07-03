import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRouterModule} from './app-router.module';

import {AppComponent} from './app.component';
import {HeaderModule} from './common/header';
import {MenuNavigationModule} from './common/menu-navigation';
import {FooterModule} from './common/footer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HeaderModule,
    MenuNavigationModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
