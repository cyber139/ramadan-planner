import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2modalPageRoutingModule } from './tab2modal-routing.module';

import { Tab2modalPage } from './tab2modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2modalPageRoutingModule
  ],
  declarations: [Tab2modalPage],
  entryComponents: [Tab2modalPage]
})
export class Tab2modalPageModule {}
