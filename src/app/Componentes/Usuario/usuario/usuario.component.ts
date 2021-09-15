import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
}
