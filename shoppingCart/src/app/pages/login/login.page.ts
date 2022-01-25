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

  constructor(private nav: NavController, private http: HttpClient) { }

  ngOnInit() {
  }


  irparaInicio(){
    this.nav.navigateForward('inicio');
  }

  login(){
    this.http.post('http://localhost/PHP/api/login.php', {"email":this.email, "password":this.password}).subscribe((data: any)=>{
      console.log(data);
      if(data.status==200){
        alert("Login efetuado com Sucesso");
      }else if (data.status==500){
        alert("Login ou senha errado");
      }

    });

    
  }
  
}
