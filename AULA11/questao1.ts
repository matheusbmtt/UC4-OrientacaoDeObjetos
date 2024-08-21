let reader = require("readline-sync")

export interface Aluno {
    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number);
    //media se refere a media das notas das provas
    media(): number;
    //final se refere a media das provas e do trabalho
    final(): number;
}

export class Aluno implements Aluno{
    public matricula: number
    public nome: string
    public notaProva1: number
    public notaProva2: number
    public notaTrabalho: number

    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number){
        this.matricula = matricula
        this.nome = nome
        this.notaProva1 = notaProva1
        this.notaProva2 = notaProva2
        this.notaTrabalho = notaTrabalho
    }

    public getAluno(): void{
        console.log(`Nome: ${this.nome}, Matrícula: ${this.matricula}
        Notas: P1: ${this.notaProva1}, P2: ${this.notaProva2} e Trab.: ${this.notaTrabalho}`);
    }

    public setAluno(): void{
        let nomeAluno = reader.question("Insira o nome do aluno: ")
        let matriculaAluno = reader.questionInt("Insira o núm. de matrícula: ")
        let prova1 = reader.questionInt("Insira a nota da prova 1: ")
        let prova2 = reader.questionInt("Insira a nota da prova 2: ")
        let trabalho = reader.questionInt("Insira a nota do trabalho: ")

        this.matricula = matriculaAluno
        this.nome = nomeAluno
        this.notaProva1 = prova1
        this.notaProva2 = prova2
        this.notaTrabalho = trabalho
    }

    //media se refere a media das notas das provas
    public media(): number{
        let mediaProva = (this.notaProva1 + this.notaProva2) / 2
        return mediaProva
    }

    //final se refere a media das provas e do trabalho
    public final(): number{
        let mediaFinal = (this.notaProva1 + this.notaProva2 + this.notaTrabalho) / 3
        return mediaFinal
    }
}

let alunoUm = new Aluno(1, "teste", 8, 9, 10)
alunoUm.getAluno()
console.log(alunoUm.media());
console.log(alunoUm.final());
