import { Component, Input, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { ModalController } from '@ionic/angular';

import { CadastroService, Cliente } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-modalcliente',
  templateUrl: './modalcliente.page.html',
  styleUrls: ['./modalcliente.page.scss'],
})
export class ModalclientePage implements OnInit {
@Input() c: Cliente;
atualizar = false;
dados = {
  nome: '',
  cidade: '',
  email: ''
}
  constructor(private modalCtrl: ModalController,
              private service: CadastroService) { }

  ngOnInit() {
    if(this.c){
      //console.log("Atualizar");
      this.atualizar = true;
      this.dados = this.c;
    }
  }


  fecharModal(){
    this.modalCtrl.dismiss();
  }

  enviando(form: NgForm){
    //teste de cadastro exibido no log.
   //console.log(form.value);
   const cliente = form.value
   if(this.atualizar){
    this.service.update(cliente, this.c.id).subscribe(response =>{
      this.modalCtrl.dismiss(response);
    })
   }else{
   this.service.create(cliente).subscribe(response =>{
     this.modalCtrl.dismiss(response);
   })
  }

 }
}