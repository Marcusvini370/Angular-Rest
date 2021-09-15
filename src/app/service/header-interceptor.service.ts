import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

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

      return next.handle(tokenRequest);

  }else { //se não tem o token
    return next.handle(req);//retorna passando a requsição original / normal
  }
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
