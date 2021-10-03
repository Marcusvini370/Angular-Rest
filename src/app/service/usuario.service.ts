import { UserReport } from './../model/UserReport';
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
  getUsuarioList(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl);
  }

  getUsuarioListPage(pagina: any): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + 'page/' + pagina);
  }

  //Método de Deletar um usuário
deletarUsuario(id: Number) : Observable<any>{
  return this.http.delete(AppConstants.baseUrl + id, {responseType : 'text'});
}

// Pesquisa por Nome
consultarUser(nome:String) : Observable<any> {
  //nossa url pra os métodos com usuarop + nosso endpoint e o que vai ser consultado
  //http://localhost:8080/cursospringrestapi/usuario/buscarPorNome/jhon
  return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome);

}

consultarUserPorPage(nome:String, page: Number) : Observable<any> {
  //consultar usuário por páginaçãop com nome

  return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome + '/page/' + page);

}

//Edição
getUsuario(id: any) : Observable<any> {
  return this.http.get<any>(AppConstants.baseUrl + id);
}

// cadastro de usuário
salvarUsuario(user: any) : Observable<any>{
  return this.http.post<any>(AppConstants.baseUrl, user);
}

// update de usuário
updateUsuario(user: any) : Observable<any>{
  return this.http.put<any>(AppConstants.baseUrl, user);
   //http://localhost:8080/cursospringrestapi/usuario/id
}

userAutenticado(){
  if (localStorage.getItem('token') !== null &&
  localStorage.getItem('token')?.toString().trim() !== null ) {
    return true;
}else{
  return false;
}

}

removerTelefone(id: any) : Observable<any> {
  return this.http.delete<any>(AppConstants.baseUrl + 'removerTelefone/' + id);
}




downloadPdfRelatorio() {
  return this.http.get(AppConstants.baseUrl + 'relatorio', {responseType : 'text'}).subscribe(data => {
    //angula 8  document.querySelector('iframe').src = data;

    //angular 12, src = midia imagem etc , data = os dados do pdf
    const iframe = document.querySelector('iframe');
    iframe?.setAttribute('src', data);
  });
}

downloadPdfRelatorioParam(userReport: UserReport) {//post envio de dados
  return this.http.post(AppConstants.baseUrl + 'relatorio/', userReport ,
  {responseType : 'text'}).subscribe(data => {
    const iframe = document.querySelector('iframe');
    iframe?.setAttribute('src', data);
  });
}

carregarGrafico() : Observable<any>{
  return this.http.get(AppConstants.baseUrl + 'grafico');
}




}
