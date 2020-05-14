import { Component, OnInit } from '@angular/core';
import { NavController,ModalController, NavParams, AlertController } from '@ionic/angular';
import { Calendar } from '@ionic-native/calendar/ngx';
import { Tab2Page } from '../tab2.page';

@Component({
  selector: 'app-tab2modal',
  templateUrl: './tab2modal.page.html',
  styleUrls: ['./tab2modal.page.scss'],
})
export class Tab2modalPage implements OnInit {

  event = { header: "", location: "", message: "", startDate: "", endDate: "" };
 
  minDate = new Date().toISOString();
 
  eventSource = [];
  viewTitle;
  constructor(
    private modalCtrl:ModalController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private calendar: Calendar
    ) { }

  ngOnInit() {
  }

  save() {
    this.calendar.createEvent(this.event.header, this.event.location, this.event.message, new Date(this.event.startDate), new Date(this.event.endDate)).then(
      async (msg) => {
        let alert = await this.alertCtrl.create({
          header: 'Success!',
          subHeader: 'Event saved successfully',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.pop();
      },
      async (err) => {
        let alert = await this.alertCtrl.create({
          header: 'Failed!',
          subHeader: err,
          buttons: ['OK']
        });
        alert.present();
      }
    );
  }
  
  

}