import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { ModalController } from '@ionic/angular';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-modalcliente',
  templateUrl: './modalcliente.page.html',
  styleUrls: ['./modalcliente.page.scss'],
})
export class ModalclientePage implements OnInit {

  constructor(private modalCtrl: ModalController,
              private service: CadastroService) { }

  ngOnInit() {
  }


  fecharModal(){
    this.modalCtrl.dismiss();
  }

  enviando(form: NgForm){
    //teste de cadastro exibido no log.
   //console.log(form.value);
   const cliente = form.value
   this.service.create(cliente).subscribe(response =>{
     this.modalCtrl.dismiss(response);
   })
  }

}
