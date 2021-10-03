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
profissao!: string;
salario! : DoubleRange;

/*
cep!: string;
logradouro!: string;
complemento!: string;
bairro!: string;
localidade!: string;
uf!: string;
, cep: "",  logradouro: "", complemento: "", bairro: "",
     localidade: "", uf: ""  */




telefones!: Array<Telefone>;

}
