import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalclientePageRoutingModule } from './modalcliente-routing.module';

import { ModalclientePage } from './modalcliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalclientePageRoutingModule
  ],
  declarations: [ModalclientePage]
})
export class ModalclientePageModule {}
