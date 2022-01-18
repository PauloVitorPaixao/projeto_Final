import { Component, OnInit } from '@angular/core';

import { ModalController, NavController } from '@ionic/angular';

import { CadastroService, Cliente } from 'src/app/services/cadastro.service';

import { ModalclientePage } from '../modalcliente/modalcliente.page';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
clientes: Cliente[];
  constructor(private nav: NavController,
              private service: CadastroService,
              private modalCtrl: ModalController) { }

  ngOnInit() {

      this.service.getAll().subscribe(response => {
        this.clientes = response;
      })

  }

  irparaInicio(){
    this.nav.navigateForward('inicio');
  }

  remover(id: any){
    this.service.remove(id).subscribe(() =>{
      //this.clientes = this.clientes.filter(idcliente => idcliente.id ! == id);

      
      this.service.getAll().subscribe(response => {
        this.clientes = response;
      })
    })
  }

  novoCliente(){
      this.modalCtrl.create({
        component: ModalclientePage
      }).then(modal => {
        modal.present();
        return modal.onDidDismiss();
      }).then(({data}) =>{
        this.service.getAll().subscribe(response => {
          this.clientes = response;
        })
      })
  }


  atualizar(c: Cliente){
    //console.log(c);

    this.modalCtrl.create({
      component: ModalclientePage,
      componentProps: {c}
    }).then (modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({data}) =>{
      this.service.getAll().subscribe(response => {
        this.clientes = response;
      })
    })
  }


}
