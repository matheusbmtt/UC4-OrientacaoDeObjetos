let leitor1 = require('readline-sync')

class Aluno{
    nome: string
    notas: number[]

    constructor(nome: string){
        this.nome = nome
        this.notas = []
    }

    addNotas(): void{
        let nota1 = leitor.questionInt("Primeira nota? ")
        let nota2 = leitor.questionInt("Segunda nota? ")
        let nota3 = leitor.questionInt("Terceira nota? ")
        this.notas.push(nota1,nota2,nota3)
    }

    calcularNotas(){
        let media = (this.notas[0] + this.notas[1] + this.notas[2]) / 3
        return `A media das notas do ${this.nome} e: ${media.toFixed(2)}`
    }
    
}

function CriarAluno(): Aluno {
    let nomeUp = leitor1.question("Insira o nome: ")
    return new Aluno(nomeUp);
}

let aluno1 = CriarAluno();

let Menu: boolean = true;
while (Menu) {
    let opecao = leitor1.questionInt("Insira o numero desejado: \n 1 - Criar o Aluno \n 2 - Adicionar Notas \n 3 - Calcular Notas")

    
switch (opecao) {
    case 1:
        aluno1;
        break;
    case 2:
        aluno1.addNotas();
        break;
    case 3:
        aluno1.calcularNotas();
    case 4:
        menu = false;
        break;
    default:
        console.log("Opecao invalida. Tente novamente.");
        break;
    }
}

console.log("Programa encerrado.");