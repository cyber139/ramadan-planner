import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';
import { isNgTemplate } from '@angular/compiler';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  

value = 0;
i=0;
type:string;
public doc_name:any=[];
public list:any=[];
days: any= ['Mon','Tues','Wed','Thurs','Fri','Sat','Sun'];
day: string='';

  constructor(private nav: NavController,
  private modalController: ModalController,
  private storage: Storage){}

  async openModal() {
    const modal = await this.modalController.create({
      component:ModalPage,
      componentProps:{
        custom_id:this.value
      }
    });
     
    modal.onDidDismiss().then((doc_name) => {
 
      for(var i=0;i<doc_name.data.length;i++){
        this.doc_name.push(doc_name.data[i]);
        console.log(doc_name.data[i]);
        this.storage.set('text', doc_name.data[i]).then(result => {
          console.log('Data is saved');
          }).catch(e => {
          console.log("error: " + e);
          });
      }
       
    });
    
    return await modal.present();
}
  // // set a key/value
  // storage.set('name', 'Max');

  // // Or to get a key/value pair
  // storage.get('age').then((val) => {
  //   console.log('Your age is', val);
  // });
  
ngOnInit() {
  this.type = 'mon';
  this.type = 'tues';
  this.type = 'wed';
  this.type = 'thurs';
  this.type = 'fri';
  this.type = 'sat';
  this.type = 'sun';


}

segmentChanged(ev: any) {
  console.log('Segment changed', ev);
}

  checkAll(){
    for(let i =0; i <= this.doc_name.length; i++) {
       this.doc_name[i].checked = true;
    }
    console.log(this.doc_name);
  }


checked = [];
//Adds the checkedbox to the array and check if you unchecked it
addCheckbox(event, checkbox : String) { 

    if ( event.checked ) {
      this.checked.push(checkbox);
      
    } else {
      let index = this.removeCheckedFromArray(checkbox);
      this.checked.splice(index,1);
    }
  }

  //Removes checkbox from array when you uncheck it
  removeCheckedFromArray(checkbox : String) {
    return this.checked.findIndex((category)=>{
      return category === checkbox;
    })
  }

  //Empties array with checkedboxes
  emptyCheckedArray() {
    this.checked = [];
  }

 getCheckedBoxes() {
   //Do whatever
   console.log(this.checked);
 }

// getDataFromStorage(){
//   this.storage.get('text').then(result => {
//     if (result != null) {
//     console.log('text: '+ result);
//     }
//     }).catch(e => {
//     console.log('error: '+ e);
//     // Handle errors here
//     });
// }
  
//   checkValues(event) {
//     console.log(this.data);
//     if(!this.data) this.data = new Array();

//     this.data.push(this.data);
// }
  
//   submit(){
//     console.log(this.doc_name);
//   }

}
