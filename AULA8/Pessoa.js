"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var leitor = require("readline-sync");
var Pessoa = /** @class */ (function () {
    function Pessoa(nomePessoa, sobrenomePessoa, nome_do_pai, nome_da_mae, numero_rg, numero_cpf, data_de_nascimento) {
        this.nome = nomePessoa;
        this.sobrenome = sobrenomePessoa;
        this.nome_do_pai = nome_do_pai;
        this.nome_da_mae = nome_da_mae;
        this.numero_rg = numero_rg;
        this.numero_cpf = numero_cpf;
        this.data_de_nascimento = data_de_nascimento;
    }
    Pessoa.prototype.getPessoa = function () {
        console.log("\n            Nome: ".concat(this.nome, ",\n            Sobrenome: ").concat(this.sobrenome, ",\n            Nome do Pai: ").concat(this.nome_do_pai, ",\n            Nome da M\u00E3e: ").concat(this.nome_da_mae, ",\n            RG: ").concat(this.numero_rg, ",\n            CPF: ").concat(this.numero_cpf, ",\n            Data de Nascimento: ").concat(this.data_de_nascimento[0], "/").concat(this.data_de_nascimento[1], "/").concat(this.data_de_nascimento[2]));
    };
    Pessoa.prototype.setPessoa = function () {
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
        this.nome = nomeUp;
        this.sobrenome = sobrenomeUp;
        this.nome_do_pai = nome_do_paiUp;
        this.nome_da_mae = nome_da_maeUp;
        this.numero_rg = numero_rgUp;
        this.numero_cpf = numero_cpfUp;
        this.data_de_nascimento = data_de_nascimentoUp;
    };
    Pessoa.prototype.calculeIdade = function () {
        var anoAtual = leitor.questionInt("Em qual ano estamos? ");
        var idade = anoAtual - this.data_de_nascimento[2];
        console.log("Voc\u00EA tem ".concat(idade, " anos"));
        if (idade < 18) {
            console.log("Voc\u00EA \u00E9 menor de idade, seus respons\u00E1veis s\u00E3o:\n            ".concat(this.nome_do_pai, " e ").concat(this.nome_da_mae));
        }
        else {
            console.log("Voc\u00EA \u00E9 maior de idade");
        }
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
