"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var leitor = require("readline-sync");
function criarPessoa() {
    var nomeUp = leitor.question("Insira o nome da pessoa: ");
    var sobrenomeUp = leitor.question("Insira o sobrenome da pessoa: ");
    var nome_do_paiUp = leitor.question("Insira o nome do pai: ");
    var nome_da_maeUp = leitor.question("Insira o nome da mãe: ");
    var numero_rgUp = leitor.question("Insira o numero do RG: ");
    var numero_cpfUp = leitor.question("Insira o numero do CPF: ");
    var diaUp = leitor.questionInt("Insira o dia do nascimento: ");
    var mesUp = leitor.questionInt("Insira o mês de nascimento: ");
    var anoUp = leitor.questionInt("Insira o ano de nascimento: ");
    var data_de_nascimentoUp = [diaUp, mesUp, anoUp];
    var pessoa = new Pessoa_1.Pessoa(nomeUp, sobrenomeUp, nome_do_paiUp, nome_da_maeUp, numero_rgUp, numero_cpfUp, data_de_nascimentoUp);
    return pessoa;
}
var novaPessoa = criarPessoa();
novaPessoa.getPessoa();
novaPessoa.calculeIdade();
