import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private nav: NavController) { }

  ngOnInit() {
  }


  irparaInicio(){
    this.nav.navigateForward('inicio');
  }

  irparaHome(){
    this.nav.navigateForward('home');
  }

}

    
  
  

