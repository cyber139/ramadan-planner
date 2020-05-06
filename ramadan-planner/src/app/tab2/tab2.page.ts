import { Component } from '@angular/core';
import { CalendarComponent } from 'ion2-calendar';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {

   date: string;
   type: 'string';
 
   constructor() { }
 
   onChange($event) {
     console.log($event);
   }
}
