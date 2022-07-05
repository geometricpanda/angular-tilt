import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HeaderModule} from './common/header';
import {FooterModule} from './common/footer';
import {MenuNavigationModule} from './common/menu-navigation';

import {AppRouterModule} from './app-router.module';
import {AppComponent} from './app.component';
import {ModalityDirective} from './directives/modality.directive';


@NgModule({
  declarations: [
    AppComponent,
    ModalityDirective,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
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
