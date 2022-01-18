import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  irparaCadastro(){
    this.nav.navigateForward('cadastro');
  }

  irparaHome(){
    this.nav.navigateForward('home');
  }

}
