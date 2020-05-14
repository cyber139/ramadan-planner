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
import { Tab2modalPageModule } from './tab2/tab2modal/tab2modal.module'
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { ApiService } from "./api.service";
import { IonicStorageModule } from '@ionic/storage';
import { Calendar } from '@ionic-native/calendar/ngx';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule, 
    ModalPageModule,
    Tab2modalPageModule,
    CalendarModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ApiService,
    Calendar
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
