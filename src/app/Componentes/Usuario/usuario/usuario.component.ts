import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {

  //vem uma lista de usuári em forma de um array
  usuarios: Array<User> = [

    {id: 0, nome: "", login: "", cpf: ""},
];


  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getStudentList().subscribe((data) => {
      this.usuarios = data;
    });
  }

  deleteUsuario(id:Number){
    this.usuarioService.deletarUsuario(id).subscribe(data => {
      console.log("retorno do  método delete : " + data);

      //Recarrega a lista após a exclusão
      this.usuarioService.getStudentList().subscribe((data) => {
        this.usuarios = data;
      });
    });
  }

  nome!: string;
  consultarUser(){
    this.usuarioService.consultaUser(this.nome).subscribe(data =>{
      this.usuarios = data;
    });
  }


}
