import { AppConstants } from './../app-constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  //precisa da requisição http para se comunicar via ajax com o backend
  constructor(private http: HttpClient) {}

  // Método de Listagem
  getStudentList(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl);
  }

  //Método de Deletar um usuário
deletarUsuario(id: Number) : Observable<any>{
  return this.http.delete(AppConstants.baseUrl + id, {responseType : 'text'});
}

}
