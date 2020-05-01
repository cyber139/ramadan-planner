import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];

MySelect1:any=[];
moreIndex1:any=1;
doc_name:any=[];

selectNo1(val1){
    if(val1==1)
    {
     this.MySelect1.push(this.moreIndex1);
     this.moreIndex1++;
     this.doc_name++;
    }
    else{
      this.MySelect1.pop(this.moreIndex1);
      this.moreIndex1--;
      this.doc_name--;
    }    
  }
}
