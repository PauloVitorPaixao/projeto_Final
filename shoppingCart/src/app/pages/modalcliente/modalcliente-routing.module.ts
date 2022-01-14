import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalclientePage } from './modalcliente.page';

const routes: Routes = [
  {
    path: '',
    component: ModalclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalclientePageRoutingModule {}
