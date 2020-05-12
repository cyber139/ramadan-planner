import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { CalendarModule } from 'ion2-calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalPageModule } from './tab3/modal/modal.module';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { ApiService } from "./api.service";
import { Tab1Page } from "../app/tab1/tab1.page";
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule, 
    ModalPageModule,
    CalendarModule,
    HttpClientModule,
    IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
