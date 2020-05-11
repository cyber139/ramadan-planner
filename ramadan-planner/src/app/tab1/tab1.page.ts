import { Component, OnInit } from "@angular/core";
import { Tab1 } from "./tabs1.model";
import { ApiService } from "./../api.service";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { NavController } from "@ionic/angular";
import { AnonymousSubject } from "rxjs/internal/Subject";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";
import { Observable, of, throwError } from "rxjs";
import "rxjs/Rx";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
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
  combine: any;
  //api waktu solat
  datauser: any;
  data: any;
  constructor(
    public api: ApiService,
    private geolocation: Geolocation,
    public navCtrl: NavController,
    private http: HttpClient
  ) {}

  //geolocation
  options = {
    timeout: 10000,
    enableHighAccuracy: true,
    maximumAge: 3600,
  };
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

  //geolocation
  // async getDataUser() {
  //   await this.api.getDataUser().subscribe(
  //     (res) => {
  //       console.log(res);
  //       this.datauser = res.results;
  //       console.log(this.datauser);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

  //api waktu solat
  ngOnInit() {
    //api waktu solat
    setInterval(() => {
      const date = new Date();
      this.updateDate(date);
    }, 1000);
    this.day = this.daysArray[this.date.getDay()];
    console.log("100");
    console.log(this.date.getDate());
    this.getCurrentCoordinates();
  }

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
  // ionViewWillEnter(latitude, longitude) {
  //   latitude = 3.1065224;
  //   longitude = 101.67107399999999;

  //   this.api.getPrayer(latitude, longitude).subscribe((azan) => {
  //     console.log(azan);
  //     this.url =
  //       "https://mpt.i906.my/api/prayer/3.1065704999999997,101.6711491";
  //     this.http
  //       .get(this.url, this.azan.)
  //       .map((res) => res)
  //       .subscribe((response: any) => {
  //         this.azan = response; //this will store your response in items
  //         response.forEach((azan) => {
  //           //if you want print each item in the console
  //           console.log(azan);
  //         });
  //       });

  //     // // console.log(typeof azan.data.times[0][0]);
  //     // var date = new Date(azan.data.times[0][0] * 1000);
  //     // // Hours part from the timestamp
  //     // var hours = date.getHours();
  //     // // Minutes part from the timestamp
  //     // var minutes = "0" + date.getMinutes();
  //     // // Seconds part from the timestamp
  //     // var seconds = "0" + date.getSeconds();
  //     // // Will display time in 10:30:23 format
  //     // var formattedTime =
  //     //   hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  //     // console.log(formattedTime);
  //   });
  // }

  getPrayer(location1, location2) {
    return this.http.get(
      "https://mpt.i906.my/api/prayer/" + location1 + "," + location2
    );
  }

  ionViewWillEnter() {
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
            console.log(typeof response.data.times[this.date.getDate()]);
            this.data = response.data.times[this.date.getDate()];

            // this.data = this.data.map((data) => data.times);

            // this.data = userData.push(response.data.times[0]);
            console.log(this.data);
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
                hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
              console.log(formattedTime);

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
}
