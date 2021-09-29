import { Profissao } from "./profissao";
import { Telefone } from "./telefone";

export class User {
  //classes que vamos carregar da lista do usuário

  //! atribuição definitiva
id!: number;
login!: string;
nome!: string;
cpf!: string;
senha!: string;
dataNascimento!: string;

  profissao: Profissao = new Profissao;
  salario! : DoubleRange;

telefones!: Array<Telefone>;

}
