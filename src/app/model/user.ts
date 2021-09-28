import { Profissao } from "./profissao";
import { Telefone } from "./telefone";

export class User {
  //classes que vamos carregar da lista do usuário

  //! atribuição definitiva
id!: Number;
login!: String;
nome!: String;
cpf!: String;
senha!: String;
dataNascimento!: String;

  profissao: Profissao = new Profissao;
  salario! : DoubleRange;

telefones!: Array<Telefone>;

}
