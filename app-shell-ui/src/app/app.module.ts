import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import './root.config';
import { SingleSpaConfigService } from "./single-spa-config-service";
import { AppService } from "./app.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ SingleSpaConfigService, AppService, { provide: 'Window', useValue: window } ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(private ngZone: NgZone){
    (window as any).ngZone = this.ngZone;
  }
}
