import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(private loginService: LoginServiceService){}

  usuario = {login: '', senha: ''};
  public login(){
    this.loginService.login(this.usuario);

  }



}
