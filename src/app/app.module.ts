import { HttpInterceptorModule } from './service/header-interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpInterceptor } from '@angular/common/http';
import { HomeComponent } from './home/home.component'; /* Requisições via ajax */
import { RouterModule,  Routes } from '@angular/router';
import {ModuleWithProviders} from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './Componentes/Usuario/usuario/usuario.component';
import { UsuarioaddComponent } from './Componentes/Usuario/usuario-add/usuarioadd/usuarioadd.component';
import { GuardiaoGuard } from './service/guardiao.guard';
import { NgxMaskModule, IConfig} from 'ngx-mask';
import {NgxPaginationModule} from 'ngx-pagination';





export const appRouters: Routes = [

  {path : 'home', component : HomeComponent, canActivate: [GuardiaoGuard]},
  {path: 'login', component : LoginComponent},
  {path: '', component : LoginComponent},
  {path: 'usuarioList', component : UsuarioComponent, canActivate: [GuardiaoGuard]},
  {path: 'usuarioAdd', component : UsuarioaddComponent, canActivate: [GuardiaoGuard]}, //novo usuário
  {path: 'usuarioAdd/:id', component : UsuarioaddComponent, canActivate: [GuardiaoGuard]} // edição de usuário


];

export const optionsMask : Partial<IConfig> | (() => Partial<IConfig>) = {};

export const routes : ModuleWithProviders = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    UsuarioaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule,
    NgxMaskModule.forRoot( {dropSpecialCharacters: false}),
    NgxPaginationModule
    ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
