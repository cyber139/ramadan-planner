import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
value = 0;
i=0;
data:any=[
       {ID: 1, testName: " test1", checked: false},
       {ID: 2, testName: " test2", checked: false}
];

  constructor(private nav: NavController,
  private modalController: ModalController){}
  
  // async openModal(){
  //   const modal = await this.modalController.create({
  //     component:ModalPage,
  //     componentProps:{
  //       custom_id:this.value
  //     }
  //   });
  //   modal.present();
  // }

  async openModal() {
    const modal = await this.modalController.create({
      component:ModalPage,
      componentProps:{
        custom_id:this.value
      }
    });
     
    modal.onDidDismiss().then((data) => {
      console.log(data);
    });
    
    return await modal.present();
}
  
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  checkAll(){
    for(let i =0; i <= this.data.length; i++) {
       this.data[i].checked = true;
    }
    console.log(this.data);
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


  
//   checkValues(event) {
//     console.log(this.data);
//     if(!this.data) this.data = new Array();

//     this.data.push(this.data);
// }
  
  // submit(){
  //   console.log(this.doc_name);
  // }

}
