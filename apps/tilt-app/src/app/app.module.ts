import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgTiltModule} from '@geometricpanda/angular-tilt';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgTiltModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
