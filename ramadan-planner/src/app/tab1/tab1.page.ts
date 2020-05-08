import { Component } from '@angular/core';
import { PickerOptions } from "@ionic/core";
import { NavController, ModalController, PickerController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( private pickerCtrl:PickerController) {}

  location =' ';
  today = Date.now();
  myDate: String = new Date().toISOString();
  prayerTime: any[]=[
   
        { text: 'Subuh ',    value: '5:50 AM'   },
        { text: 'Zuhur ',    value: '1:20 PM'   },
        { text: 'Asar ',     value: '3.00 PM'   },    
        { text: 'Maghrib ',  value: '7.00 PM' },
        { text: 'Isyak ',    value: '8.00 PM'   }
      ];

  public form = [
    { val: 'Makan', isChecked: true },
    { val: 'Tidur', isChecked: false },
    { val: 'Makan lagi', isChecked: false },
    { val: 'Solat', isChecked: true },
    { val: 'Tidur lagi', isChecked: false },
    { val: 'Makan lagi lagi', isChecked: false }
  ];

  async showOption(){
    let opts:PickerOptions={
      buttons:[
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text:'Ok',
          handler:(value:any) => {
            console.log(value);
          }
        }
      ],
      columns:[
      //   {
      //   name:'location',
      //   options:[
      //     {text: 'Johor', value : 'Johor'},
      //     {text: 'Kedah', value : 'Kedah'},
      //     {text: 'Kelantan', value : 'Kelantan'},
      //     {text: 'Melaka', value : 'Melaka'},
      //     {text: 'Negeri Sembilan', value : 'Negeri Sembilan'},
      //     {text: 'Pahang', value : 'Pahang'},
      //     {text: 'Perlis', value : 'Perlis'},
      //     {text: 'Pulau Pinang', value : 'Pulau Pinang'},
      //     {text: 'Perak', value : 'Perak' },
      //     {text: 'Selangor', value : 'Selangor' },
      //     {text: 'Sabah', value : 'Sabah' },
      //     {text: 'Sarawak', value : 'Sarawak' },
      //     {text: 'Terengganu', value : 'Terengganu'},
      //     {text: 'Wilayah Persekutuan',  value : 'Wilayah Persekutuan'},
      //   ],
      // },
      {
        name:'location',
        options:[      
        { value: 'SGR01', text: 'Selangor, Gombak'},
        { value: 'SGR01', text: 'Selangor, Petaling'},
        { value: 'SGR01', text: 'Selangor, Sepang'},
        { value: 'SGR01', text: 'Selangor, Hulu Langat'},
        { value: 'SGR01', text: 'Selangor, Hulu Selangor'},
        { value: 'SGR01', text: 'Selangor, S.Alam'},
        { value: 'SGR02', text: 'Selangor, Kuala Selangor' },
        { value: 'SGR02', text: 'Selangor, Sabak Bernam' },
        { value: 'SGR03', text: 'Selangor, Klang' },
        { value: 'SGR03', text: 'Selangor, Kuala Langat' },
        { value: 'WLY01', text: 'Wilayah Persekutuan Kuala Lumpur' },
        { value: 'WLY01', text: 'Wilayah Persekutuan Putrajaya' },
        { value: 'WLY02', text: 'Wilayah Persekutuan Labuan'}
      ]
    }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data=>{
      let col = await picker.getColumn('location');
      console.log('col: ',col);
      this.location = col.options[col.selectedIndex].text
    });
  }
}
