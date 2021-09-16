import { AppConstants } from './../app-constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario: { login: string; senha?: string; }){

   // JSON.stringify(usuario) Faz com que os parametro siga o método json com as aspas para não da erro
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {

      /* retorno http */

        var token = (JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1]);
      // .Authorization.split(' ')[1] retira o bearer e pega o token depos do espaço branco que é o elemento 1

      localStorage.setItem("token", token);

      //console.info("Token: " + token) // para testar
      this.router.navigate(['home']);

    },
      error => {
        console.error("Erro ao fazer login");
        alert('Acesso Negado');
      }
    );
  }

}
