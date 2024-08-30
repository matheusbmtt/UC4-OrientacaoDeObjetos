import * as readLineSync from 'readline-sync';


export interface Aluno {
    matricula: number;
    nome: string;
    notaProva1: number;
    notaProva2: number;
    notaTrabalho: number;
    media(): number;
    final(): number;
}

export class Aluno implements Aluno {
    matricula: number;
    nome: string;
    notaProva1: number;
    notaProva2: number;
    notaTrabalho: number;
    
    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number){
        this.matricula = matricula;
        this.nome = nome;
        this.notaProva1 = notaProva1; 
        this.notaProva2 = notaProva2;
        this.notaTrabalho = notaTrabalho;
    }

    public setAluno(): void {
        let matricula = readLineSync.questionInt("Qual o numero da matricula?");
        let nome = readLineSync.question("Qual o nome do aluno? ");
        let notaProva1 = readLineSync.questionInt("Qual a nota da primeira prova? ");
        let notaProva2 = readLineSync.questionInt("Qual a nota da segunda prova? ");
        let notaTrabalho = readLineSync.questionInt("Qual a nota do trabalho? ");
    }
    public getAluno(): string {
        return `
        ${this.matricula}
        ${this.nome}
        ${this.notaProva1}
        ${this.notaProva2}
        ${this.notaTrabalho}
        `
    }
    public media(): number {
        return (this.notaProva1 + this.notaProva2) / 2;
    }
    public final(): number {
        return (this.notaProva1 + this.notaProva2 + this.notaTrabalho) / 3;
    }
}