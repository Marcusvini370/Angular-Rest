import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'; /* Requisições via ajax */
import { RouterModule,  Routes } from '@angular/router';
import {ModuleWithProviders} from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component'


export const appRouters: Routes = [

  {path : 'home', component : HomeComponent},
  {path: 'login', component : LoginComponent},
  {path: '', component : LoginComponent},


];

export const routes : ModuleWithProviders = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    routes
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
