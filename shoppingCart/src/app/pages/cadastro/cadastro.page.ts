import { Component, OnInit } from '@angular/core';

import { ModalController, NavController, ToastController } from '@ionic/angular';

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
              private modalCtrl: ModalController,
              private toastCtrl: ToastController) { }

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
      });
      this.toastCtrl.create({
        message: 'Usuário deletado com sucesso',
        duration: 2000
      }).then(toast =>{
        toast.present();
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
        });
        this.toastCtrl.create({
          message: 'Usuário cadastrado com sucesso',
          duration: 2000
        }).then(toast =>{
          toast.present();
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
      });
      this.toastCtrl.create({
        message: 'Usuário Atualizado com sucesso',
        duration: 2000
      }).then(toast =>{
        toast.present();
      })
    })
  }


}
