import { User } from './../../../../model/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Telefone } from 'src/app/model/telefone';


@Component({
  selector: 'app-root',
  templateUrl: './usuarioadd.component.html',
  styleUrls: ['./usuarioadd.component.css']
})
export class UsuarioaddComponent implements OnInit {

  usuario = new User();
  telefone = new Telefone(); //instanciações


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
        this.usuario.telefones = data.telefones;
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
      this.telefone = new Telefone();
    }

    deletarTelfone(id: any, i: any) {
      //um telefone que n ta no banco de daddos só aparecendo na tela vai remover ele
        if(id !== null && confirm('Deseja realmente remover?')) {

          //requisição ajax
        this.userService.removerTelefone(id).subscribe(data => {
         //vai remover apenas um elemento que é um indice
         this.usuario.telefones.splice(i, 1);

        })
      }

      if(id == null) { //n tem id
        this.usuario.telefones.splice(i,1);
        return;
      }
    }

    addFone() {
      if(this.usuario.telefones === undefined) {
        //se a lista tiver indefinida ou n instanciada. agente instancia a lista pra n da erro
        this.usuario.telefones = new Array<Telefone>();
      }
      //lista de telefone adicionando esse novo telefone na tela
      this.usuario.telefones.push(this.telefone);
      this.telefone = new Telefone(); //caso queira adicionar um segundo telefone
      //deixa instanciado
    }
  }


