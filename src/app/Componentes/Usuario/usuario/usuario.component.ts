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

    {id: 0, nome: "", login: "", cpf: "", senha: "" },
];


  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getStudentList().subscribe((data) => {
      this.usuarios = data;
    });
  }

  // deletação de usuário
  deleteUsuario(id:Number){

    if (confirm('Deseja mesmo remover?')){

    this.usuarioService.deletarUsuario(id).subscribe(data => {
      //Recarrega a lista após a exclusão
      this.usuarioService.getStudentList().subscribe((data) => {
        this.usuarios = data;
      });
    });
  }
  }


  // Busca por nome
  nome!: string;
  consultarUser(){
    this.usuarioService.consultaUser(this.nome).subscribe(data =>{
      this.usuarios = data;
    });
  }


}
