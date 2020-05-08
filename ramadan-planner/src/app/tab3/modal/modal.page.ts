import { Component, OnInit } from '@angular/core';
import { NavController,ModalController } from '@ionic/angular';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private nav:NavController,private modalCtrl:ModalController) { }

  // closeModal(){
  //   this.modalCtrl.dismiss();
  // }


  ngOnInit() {
  }

  MySelect1:any=[];
  moreIndex1:any=1;
  public doc_name:any=[
    // {
    //   value: String, 
    //   checked: Boolean
    // },
   
  ];
  item = 0;

selectNo1(val1){
    if(val1==1)
    {
     this.MySelect1.push(this.moreIndex1);
     this.moreIndex1++;
     console.log(this.doc_name);
    }
    else{
      this.MySelect1.pop(this.moreIndex1);
      this.moreIndex1--;
      this.doc_name.length--;
      console.log(this.doc_name);
    }    
  }

  submit(){
    console.log(this.doc_name);
    this.modalCtrl.dismiss(this.doc_name);
  }
}
