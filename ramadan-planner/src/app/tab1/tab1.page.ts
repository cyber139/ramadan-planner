
import { Component, OnInit } from "@angular/core";
import { ApiService } from "./../api.service";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { AnonymousSubject } from "rxjs/internal/Subject";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";
import { Observable, of, throwError } from "rxjs";
import "rxjs/Rx";

import { PickerOptions } from "@ionic/core";
import { NavController, ModalController, PickerController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { getLocaleDateFormat } from '@angular/common';
import { Router } from '@angular/router';
import { Tab3Page } from '../tab3/tab3.page';
import { TabsPage } from '../tabs/tabs.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

 //geolocation
 latitude: any; //latitude
 longitude: any; //longitude

  //geolocation
  myDate: String = new Date().toISOString();

  private daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  private timer;
  private date = new Date();
  public hour: any;
  public minute: string;
  public second: string;
  public ampm: string;
  public day: string;

 //api waktu solat
 cart = [];
 userData = [];
 azanconv;
 azan: any;
 response: any;
 url;
 location: {
   location1: any;
   location2: any;
 };

 //api waktu solat
 datauser: any;
 data: any;

 //Other
 place =' ';
 today = Date.now();
//  myDate: String = new Date().toISOString();
//  prayerTime: any[]=[
  
//        { text: 'Subuh ',    value: '5:50 AM'   },
//        { text: 'Zuhur ',    value: '1:20 PM'   },
//        { text: 'Asar ',     value: '3.00 PM'   },    
//        { text: 'Maghrib ',  value: '7.00 PM' },
//        { text: 'Isyak ',    value: '8.00 PM'   }
//      ];
     
  constructor( private pickerCtrl:PickerController,
    public api: ApiService,
    private geolocation: Geolocation,
    public navCtrl: NavController,
    private http: HttpClient,
    public storage: Storage,
    private route: Router,
    ) {}

    public form = [
      { val: 'Makan', isChecked: true },
      { val: 'Tidur', isChecked: false },
    ];

     //geolocation
  options = {
    timeout: 10,
    enableHighAccuracy: true,
    maximumAge: 3600,
  };  

  
  // // set a key/value
  // storage.set('name', 'Max');

  // // Or to get a key/value pair
  // storage.get('age').then((val) => {
  //   console.log('Your age is', val);
  // });
  
  getCurrentCoordinates() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        console.log(this.latitude);
        console.log(this.longitude);
      })
      .catch((error) => {
        console.log("Error getting location", error);
      });
  }

  //api waktu solat
  // ngOnInit() {
  //   //api waktu solat
  //   setInterval(() => {
  //     const date = new Date();
  //     this.updateDate(date);
  //   }, 1000);
  //   this.day = this.daysArray[this.date.getDay()];
  //   console.log("100");
  //   console.log(this.date.getDate());
  //   this.getCurrentCoordinates();
  // }


  private updateDate(date) {
    const hours = date.getHours();

    this.ampm = hours >= 12 ? "PM" : "AM";

    this.hour = hours % 12;
    this.hour = this.hour ? this.hour : 12;

    this.hour = this.hour < 10 ? "0" + this.hour : this.hour;

    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? "0" + minutes : minutes.toString();

    const seconds = date.getSeconds();
    this.second = seconds < 10 ? "0" + seconds : seconds.toString();
  }

  getPrayer(location1, location2) {
    return this.http.get(
      "https://mpt.i906.my/api/prayer/" + location1 + "," + location2
    );
  }

  ionViewWillEnter(){
    this.myDate = new Date().toISOString();
    setInterval(() => {
      const date = new Date();
      this.updateDate(date);
    }, 1000);
    
    this.day = this.daysArray[this.date.getDay()];
    console.log("100");
    console.log(this.date.getDate());
    this.getCurrentCoordinates();  

    Promise.all([]).then(()=>this.storageGet());
  }
  
  ngOnInit(){
    this.userData = ["Subuh", "Syuruk", "Zohor", "Asar", "Maghrib", "Isya"];
    let azanconv;
    let waktu = [];
    this.data = [];
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        this.getPrayer;
        this.api
          .getPrayer(this.latitude, this.longitude)
          .map((res) => res)
          .subscribe((response: any) => {
            this.azan = response; //this will store your response in items
//             console.log(typeof response.data.times[this.date.getDate()]);
            this.data = response.data.times[this.date.getDate()];
//             console.log(this.data);
            var element = {};

            for (
              let i = 0;
              i < this.data.length && i < this.userData.length;
              i++
            ) {
              // console.log(typeof azan.data.times[0][0]);
              var date = new Date(this.data[i] * 1000);
              // Hours part from the timestamp
              var hours = date.getHours();
              // Minutes part from the timestamp
              var minutes = "0" + date.getMinutes();
              // Seconds part from the timestamp
              var seconds = "0" + date.getSeconds();
              // Will display time in 10:30:23 format
              var formattedTime =
                hours + ":" + minutes.substr(-2);
//               console.log(formattedTime); //WAKTU SOLAT

              this.cart.push({
                namaSolat: this.userData[i],
                waktuSolat: formattedTime,
              });
            }
            console.log(this.cart);
            // this.combine = this.data.push(this.userData);
            // console.log(this.combine);

            // console.log(this.combine);
            // });

          });

      })
      .catch((error) => {
        console.log("Error getting location", error);
      });
    }

  

 

  storageGet(){
    // this.storage.get('text').then((text)=>{this.doc_name=text;});
    // console.log('MYDTA: ',this.doc_name);
}

goTo(){
  this.route.navigate(['/tabs/tab3']);
}

navigateToOtherPage(): void {
  this.navCtrl.navigateRoot([TabsPage]);
}

}
