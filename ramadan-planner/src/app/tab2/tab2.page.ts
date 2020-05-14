import { Component,ViewChild } from '@angular/core';
import {
  CalendarComponent,
  CalendarComponentOptions
} from 'ion2-calendar'
import { ToastController,ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {

  @ViewChild('calendar', { read: CalendarComponent ,static: false })
  calendarRef: CalendarComponent;

   public event: any=[];
   type: string;
   showToggleButtons = true;
   showMonthPicker = true;

   date: {
    from: string
    to: string
  } = {
    from: '',
    to: ''
  };

  options: CalendarComponentOptions = {
    from: new Date(2000, 0, 1),
    pickMode: 'range',
  };
 
   constructor(private toastCtrl: ToastController,public modalCtrl: ModalController,) { }
 
   onChange($event) {
     console.log($event);
   }

   onSelect($event) {
    console.log('onSelect', $event);
    this._toastWrap('onSelect', $event)
  }

  onSelectStart($event) {
    console.log('onSelectStart',$event);
    this._toastWrap('onSelectStart', $event)
  }

  onSelectEnd($event) {
    console.log('onSelectEnd',$event);
    this._toastWrap('onSelectEnd', $event)
  }

   async _toastWrap(event: string, payload: {}) {
    let toast =await this.toastCtrl.create({
      message: `${event}: ${JSON.stringify(payload, null, 2)}`,
      duration: 2000,
      position: 'middle',
      keyboardClose: false
    });
    await toast.present()
  }

  getCalendarViewDate() {
    console.log(this.calendarRef)
    this._toastWrap('view date', this.calendarRef.getViewDate());
    console.log('view date', this.calendarRef.getViewDate())
  }

  addEvent() {
    // const options: CalendarModalOptions = {
    //   title: 'BASIC',
    // };
    // let myCalendar =  this.modalCtrl.create(CalendarModal, {
    //   options: options
    // });
 
    // myCalendar.present();
 
    // myCalendar.onDidDismiss((date: CalendarResult, type: string) => {
    //   console.log(date);
    // })
  }

}
