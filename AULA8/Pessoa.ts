let leitor = require("readline-sync")

export class Pessoa{
    nome: string
    sobrenome: string
    nome_do_pai: string
    nome_da_mae: string
    numero_rg: number
    numero_cpf: number
    data_de_nascimento: Array<number>
    
    //no constructor utilizo array para a data de nascimento para segmentar a data de nascimento
    constructor(nomePessoa: string, sobrenomePessoa: string, nome_do_pai: string, nome_da_mae: string, numero_rg: number, numero_cpf: number, data_de_nascimento: Array<number>){
        this.nome = nomePessoa
        this.sobrenome = sobrenomePessoa
        this.nome_do_pai = nome_do_pai
        this.nome_da_mae = nome_da_mae
        this.numero_rg = numero_rg
        this.numero_cpf = numero_cpf
        this.data_de_nascimento = data_de_nascimento
    }

    //a forma de impressão da data está imitando o processo de split com um array
    public getPessoa(): void{
        console.log(`
            Nome: ${this.nome},
            Sobrenome: ${this.sobrenome},
            Nome do Pai: ${this.nome_do_pai},
            Nome da Mãe: ${this.nome_da_mae},
            RG: ${this.numero_rg},
            CPF: ${this.numero_cpf},
            Data de Nascimento: ${this.data_de_nascimento[0]}/${this.data_de_nascimento[1]}/${this.data_de_nascimento[2]}`)
    }

    public setPessoa(): void{
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


        this.nome = nomeUp
        this.sobrenome = sobrenomeUp
        this.nome_do_pai = nome_do_paiUp
        this.nome_da_mae = nome_da_maeUp
        this.numero_rg = numero_rgUp
        this.numero_cpf = numero_cpfUp
        this.data_de_nascimento = data_de_nascimentoUp
    }

    //a idade é calculada a partir do ano atual subtraido pelo index 2 do array de data
    public calculeIdade(): void{
        let anoAtual = leitor.questionInt("Em qual ano estamos? ")
        let idade = anoAtual - this.data_de_nascimento[2]
        console.log(`Você tem ${idade} anos`)
        if(idade < 18){
            console.log(`Você é menor de idade, seus responsáveis são:
            ${this.nome_do_pai} e ${this.nome_da_mae}`)
        } else {
            console.log(`Você é maior de idade`)
        }
    }
}