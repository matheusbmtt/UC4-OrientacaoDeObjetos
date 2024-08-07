import { Pessoa } from "./Pessoa"
let leitor = require("readline-sync")

//essa function cria o objeto da classe Pessoa e retorna para a variável que fez o request
function criarPessoa(): Pessoa {
    let nomeUp = leitor.question("Insira o nome da pessoa: ")
    let sobrenomeUp = leitor.question("Insira o sobrenome da pessoa: ")
    let nome_do_paiUp = leitor.question("Insira o nome do pai: ")
    let nome_da_maeUp = leitor.question("Insira o nome da mãe: ")
    let numero_rgUp = leitor.question("Insira o numero do RG: ")
    let numero_cpfUp = leitor.question("Insira o numero do CPF: ")
    let diaUp = leitor.questionInt("Insira o dia do nascimento: ")
    let mesUp = leitor.questionInt("Insira o mês de nascimento: ")
    let anoUp = leitor.questionInt("Insira o ano de nascimento: ")
    let data_de_nascimentoUp = [diaUp, mesUp, anoUp]

    let pessoa = new Pessoa(nomeUp, sobrenomeUp, nome_do_paiUp, nome_da_maeUp, numero_rgUp, numero_cpfUp, data_de_nascimentoUp)
    return pessoa
}

let novaPessoa = criarPessoa()
novaPessoa.getPessoa()
novaPessoa.calculeIdade()