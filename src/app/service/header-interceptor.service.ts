import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable() //vai fazer a injeção direta
export class HeaderInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    if(localStorage.getItem('token') !== null) {

      const token = 'Bearer ' + localStorage.getItem('token');

      //sobrecresvebdi a parte do angular e passar o token no cabeçalho
      //toda vez que fazer uma requisição no servidor esse token vai está junto
      //resgata a condição original req.clone
      const  tokenRequest = req.clone({ //seta no cabeçalho
        headers : req.headers.set('Authorization', token)
      });

      return next.handle(tokenRequest).pipe(tap((event: HttpEvent<any>) => {
        if(event instanceof HttpResponse && (event.status === 200 || event.status === 201)) {
          console.info('Sucesso na operação')
        }
      })
      , catchError(this.processaError))

  }else { //se não tem o token
    return next.handle(req).pipe(catchError(this.processaError));//retorna passando a requsição original / normal
  }
}

processaError(error: HttpErrorResponse) {
  let errorMessage = 'Erro desconhecido';
  if(error.error instanceof ErrorEvent) {
    console.error(error.error);
    errorMessage = 'Error: ' + error.error.message;
  }else {
     errorMessage = 'Status: ' + error.error.code + '\nMensagem: ' + error.error.error;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}

}




@NgModule({
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptorService,
    multi: true,
  },
],
})

//classe externa pra poder exporta ela e automaticamente ele vai ler
//toda essa classe
export class HttpInterceptorModule {}
