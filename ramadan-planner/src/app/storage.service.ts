import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
providedIn: 'root'
})

export class StorageService {

  constructor(public storage: Storage){}

  public storeData (data) {
       this.storage.set('data', data);
    }
  
  public getStoredData() {
        this.storage.get('data').then((val) => {
        console.dir(val);  //****** this outputs the object.
              return val;  //***** this returns undefined
       });
  }
}