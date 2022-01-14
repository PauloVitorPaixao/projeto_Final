import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

import { CadastroService, Cliente } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
clientes: Cliente[];
  constructor(private nav: NavController, private service: CadastroService) { }

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

}
