import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TiltModule} from './tilt';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TiltModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
