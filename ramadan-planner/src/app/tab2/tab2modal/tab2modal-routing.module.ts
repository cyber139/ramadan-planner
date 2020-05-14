import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab2modalPage } from './tab2modal.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2modalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2modalPageRoutingModule {}
