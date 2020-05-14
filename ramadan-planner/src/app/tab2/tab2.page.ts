import { Component,ViewChild } from '@angular/core';
import {
  CalendarComponent,
  CalendarComponentOptions,
  
} from 'ion2-calendar'
import { ToastController,ModalController,NavController,AlertController } from '@ionic/angular';
import { Tab2modalPage } from './tab2modal/tab2modal.page'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {

  @ViewChild('calendar', { read: CalendarComponent ,static: false })
  calendarRef: CalendarComponent;

   eventList: any=[];
   selectedEvent: any=[];
   isSelected: any=[];
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
 
   constructor(
    private toastCtrl: ToastController,
    private nav: NavController,
    private modalController: ModalController,
    private alertCtrl: AlertController,
    
    ) { }
 
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

  ADDEvent() {
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

  // openModal() {
  //   this.navCtrl.navigateForward([Tab1Page]);
  //   console.log(this.navCtrl);
  // }
value=0;

  async openModal() {
    const modal = await this.modalController.create({
      component:Tab2modalPage,
      componentProps:{
        custom_id:this.value
      }
    });
     
    // modal.onDidDismiss().then((data) => {
 
     
       
    // });
    
    return await modal.present();
}
  loadEventThisMonth() {
    // this.eventList = new Array();
    // var startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    // var endDate = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0);
    // this.calendar.listEventsInRange(startDate, endDate).then(
    //   (msg) => {
    //     msg.forEach(item => {
    //       this.eventList.push(item);
    //     });
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }

  checkEvent(day) {
    // var hasEvent = false;
    // var thisDate1 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 00:00:00";
    // var thisDate2 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 23:59:59";
    // this.eventList.forEach(event => {
    //   if(((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
    //     hasEvent = true;
    //   }
    // });
    // return hasEvent;
  }

  selectDate(day) {
    // this.isSelected = false;
    // this.selectedEvent = new Array();
    // var thisDate1 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 00:00:00";
    // var thisDate2 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 23:59:59";
    // this.eventList.forEach(event => {
    //   if(((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
    //     this.isSelected = true;
    //     this.selectedEvent.push(event);
    //   }
    // });
  }

  deleteEvent(evt) {
    // console.log(new Date(evt.startDate.replace(/\s/, 'T')));
    // console.log(new Date(evt.endDate.replace(/\s/, 'T')));
    // let alert = this.alertCtrl.create({
    //   title: 'Confirm Delete',
    //   message: 'Are you sure want to delete this event?',
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       role: 'cancel',
    //       handler: () => {
    //         console.log('Cancel clicked');
    //       }
    //     },
    //     {
    //       text: 'Ok',
    //       handler: () => {
    //         this.calendar.deleteEvent(evt.title, evt.location, evt.notes, new Date(evt.startDate.replace(/\s/, 'T')), new Date(evt.endDate.replace(/\s/, 'T'))).then(
    //           (msg) => {
    //             console.log(msg);
    //             this.loadEventThisMonth();
    //             this.selectDate(new Date(evt.startDate.replace(/\s/, 'T')).getDate());
    //           },
    //           (err) => {
    //             console.log(err);
    //           }
    //         )
    //       }
    //     }
    //   ]
    // });
    // alert.present();
  }

}
