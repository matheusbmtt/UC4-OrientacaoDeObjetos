export class Gabarito {
    public respostasCorretas: string[]
    public pesos: number[]
    constructor() {
        this.pesos = []
        this.respostasCorretas = []
    }
    public getGabarito(): string {
        return `${this.respostasCorretas}`
    }
    public addResposta(respostaCorreta: string, valor: number): void {
        this.pesos.push(valor)
        this.respostasCorretas.push(respostaCorreta) 
    }

}
export interface Prova {
    // constructor(gabarito: Gabarito);
    respostaAluno(resposta: string): void;
    acertos(): number;
    nota(): number;
    maior(outraProva: Prova): number;
}

export class Prova implements Prova {
    private respostasAluno: string[]
    private gabarito: Gabarito
    constructor(gabarito: Gabarito) {
        this.respostasAluno = []
        this.gabarito = gabarito
    }
    public getRespostasAluno(): string {
        return `${this.respostasAluno}`
    }

    public respostaAluno(resposta: string): void {
        this.respostasAluno.push(resposta)
    }

    public nota(): number {
        let nota: number = 0
        for (let i = 0; i < this.gabarito.respostasCorretas.length; i++) {
            if (this.respostasAluno[i] === this.gabarito.respostasCorretas[i]) {
                nota += this.gabarito.pesos[i]
            }
        }
        console.log("O aluno conseguiu " + nota + " pontos")
        return nota
    }

    public getTamanhoProva() : number {
        return this.gabarito.respostasCorretas.length
    }
    public acertos(): number {
        let acertos = 0 
        for (let i = 0; i < this.gabarito.respostasCorretas.length; i++) {
            if (this.respostasAluno[i] === this.gabarito.respostasCorretas[i]) {
                acertos++
            }
        }
        return acertos
    }

    public maior(outraProva: Prova): number {
        if (this.nota() > outraProva.nota()) {
            console.log("A nota dessa prova é maior")
            return this.nota()
        } else {
            console.log("A nota dessa prova é menor")
            return this.nota()
        }
    }
}