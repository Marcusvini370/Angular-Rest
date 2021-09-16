import { User } from './../../../../model/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './usuarioadd.component.html',
  styleUrls: ['./usuarioadd.component.css']
})
export class UsuarioaddComponent implements OnInit {

  usuario = new User();


  constructor(private routerActive : ActivatedRoute,  private userService: UsuarioService) { }


  ngOnInit(): void {
     //vai pegar o id que está editando
   let id = this.routerActive.snapshot.paramMap.get('id');

    if (id != null){
      this.userService.getUsuario(id).subscribe(data => {
        console.log(data);
        this.usuario.id = data.id;
        this.usuario.login = data.userLogin;
        this.usuario.nome = data.userNome;
        this.usuario.cpf = data.userCpf;
        this.usuario.senha = data.senha;
    });
    }
    }

    salvarUser(){
          if(this.usuario.id != null && this.usuario.id.toString().trim() != null){ /* Atuzalizando ou editando se o usuário existir*/
              this.userService.updateUsuario(this.usuario).subscribe(data => {
                  console.info("User Atualizado" + data);
                  this.novo();
              });

          }else{ //salvando
            this.userService.salvarUsuario(this.usuario).subscribe(data =>{
              this.novo();
              console.info("chamou save");
            });
          }
    }

    novo(){
      this.usuario = new User();
    }

  }


