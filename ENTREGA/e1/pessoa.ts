var leitor = require("readline-sync");

class pessoa {
nome: string;
idade: Number;
time: string;
telefone: Number;
país: string;

constructor(
    nome: string,
    idade: Number,
    time: string,
    telefone: Number,
    país: string
) {
    this.nome = nome;
    this.idade = idade;
    this.time = time;
    this.telefone = telefone;
    this.país = país;
}

cumprimentar(): void {
    console.log(
    `Olá Meu nome é ${this.nome}, e Tenho ${this.idade} sou do ${this.país}, meu time do coração é ${this.time}, meu cell é ${this.telefone}`
    );
    }
}

function criarPessoa(): pessoa {
let nomeUp = leitor.question("Insira o nome: ");
let idadeUp = leitor.questionInt("Insira a idade: ");
let timeUp = leitor.question("Insira o time: ");
let telefoneUp = leitor.questionInt("Insira o telefone: ");
let paisUp = leitor.question("Insira o pais: ");
return new pessoa(nomeUp, idadeUp, timeUp, telefoneUp, paisUp);
}

let pessoa1 = criarPessoa();

let menu: boolean = true;
while (menu) {
let opecao = leitor.questionInt(
    "Insira o numero da opecao desejada: \n 1 - Criar Pessoa \n 2 - Cumprimentar Pessoa "
);

switch (opecao) {
    case 1:
        pessoa1;
        break;
    case 2:
        pessoa1.cumprimentar();
        break;
    case 3:
        menu = false;
        break;
    default:
        console.log("Opecao invalida. Tente novamente.");
        break;
    }
}

console.log("Programa encerrado.");