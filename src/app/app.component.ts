import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {  //toda ves que esse componente for iniciado o ngOinit vai ser executado

  title = 'angular-rest';

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) { //se o token for inválido sera redirecionado para o login
      this.router.navigate(['login']);
    }
  }

  public sair(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

  public esconderBarra(){
    if (localStorage.getItem('token') !== null &&
    localStorage.getItem('token')?.toString().trim() !== null ) {
      return false;
  }else{
    return true;
  }
  }

}



