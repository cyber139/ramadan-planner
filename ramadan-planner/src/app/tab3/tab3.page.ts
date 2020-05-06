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
  constructor(private nav: NavController,private modalController: ModalController) {}

  async openModal(){
    const modal = await this.modalController.create({
      component:ModalPage,
      componentProps:{
        custom_id:this.value
      }
    });
    modal.present();
  }

  closeModel(){
    this.modalController.dismiss();
  }

  async closeModal(){
    this.modalController.dismiss();
  }
  
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];


}
