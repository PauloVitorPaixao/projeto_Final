import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

export interface Cliente{
  id: string;
  nome: string;
  cidade: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
private url = 'http://127.0.0.1/PHP/cliente';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[Cliente]>(this.url);
  }

  remove(id: any){
    return this.http.delete(this.url + '/' + id);
  }

  create(cliente: Cliente){
     return this.http.post(this.url, cliente);
  }


  update(cliente: Cliente, id: any){
    return this.http.put(this.url + '/' + id, cliente);
  }

}
