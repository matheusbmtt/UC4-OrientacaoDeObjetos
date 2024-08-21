let rl3 = require("readline-sync")
export class NumeroComplexo {
    comparar(arg0: NumeroComplexo) {
        throw new Error("Method not implemented.");
    }
    visualizar() {
        throw new Error("Method not implemented.");
    }
    private real: number; // Parte real
    private imaginario: number; // Parte imaginária

    constructor(real: number, imaginario: number) {
        this.real = real;
        this.imaginario = imaginario
    }
    //Retorna REAL
    public getReal(): number {
        return this.real;
    }// Retorna IMAGINARIO
    public getImaginario(): number {
        return this.imaginario;
    }//Define REAL
    public setReal(reaL: number): void {
        this.real = reaL;
    }// Define IMAGINARIO
    public setImaginario(imagario: number): void {
        this.imaginario = imagario;
    }
    //Soma outro número complexo ao número complexo atual.
    public somar(outroComplexo: NumeroComplexo) {
        const novoReal = this.real = + outroComplexo.real;
        const novoImaginario = this.imaginario + outroComplexo.imaginario;
        return new NumeroComplexo(novoReal, novoImaginario);
    }
    //Subtrai outro número complexo do número complexo atual.
    public subtrair(outroComplexo: NumeroComplexo) {
        const novoReal = this.real - outroComplexo.real;
        const novoImaginario = this.imaginario - outroComplexo.imaginario;
        return new NumeroComplexo(novoReal, novoImaginario);
    }
    //Multiplica o número complexo atual por outro número complexo.
    public multiplicar(outroComplexo: NumeroComplexo) {
        const novoReal = this.real * outroComplexo.real;
        const novoImaginario = this.imaginario * outroComplexo.imaginario;
        return new NumeroComplexo(novoReal, novoImaginario);
    }
    //Divide o número complexo atual por outro número complexo.
    public dividir(outroComplexo: NumeroComplexo) {
        const novoReal = this.real / outroComplexo.real;
        const novoImaginario = this.imaginario / outroComplexo.imaginario;
        return new NumeroComplexo(novoReal, novoImaginario);
    }
    //Verifica se o número complexo atual é igual a outro número complexo.
    public equals(outroComplexo: NumeroComplexo): boolean {
        if (outroComplexo.getReal() === this.real && outroComplexo.getImaginario() === this.imaginario) {
            return true
        } else {
            return false
        }
    }
    //Retorna em string do número complexo.
    public modulo(): number {
        return Math.sqrt(this.real ** 2 + this.imaginario ** 2);
    }

    // Função para calcular o módulo de um número complexo
    public calcularModulo(real, imaginario) {
        return Math.sqrt(Math.pow(real, 2) + Math.pow(imaginario, 2));
    }

}
/*
// Cria o NumeroComplexo
const num1 = new NumeroComplexo(2, 3); // Representa 2 + 3i
const num2 = new NumeroComplexo(4, -1); // Representa 4 - 1i

// Soma dois números complexos
const soma = num1.somar(num2);
console.log(soma.toString()); // Saída: NÚMERO REAL: 6, NÚMERO IMAGINÁRIO: 2

// Subtrai dois números complexos
const subtracao = num1.subtrair(num2);
console.log(subtracao.toString()); // Saída: NÚMERO REAL: -2, NÚMERO IMAGINÁRIO: 4

// Multiplica dois números complexos
const multiplicacao = num1.multiplicar(num2);
console.log(multiplicacao.toString()); // Saída: NÚMERO REAL: 11, NÚMERO IMAGINÁRIO: 10

// Divide dois números complexos
const divisao = num1.dividir(num2);
console.log(divisao.toString()); // Saída: NÚMERO REAL: 0.44, NÚMERO IMAGINÁRIO: 0.88

// Verifica igualdade
const iguais = num1.equals(num2);
console.log(iguais); // Saída: false

// Modifica partes do número complexo
num1.setReal(15);
num1.setImaginario(-20);
console.log(num1.toString()); // Saída: NÚMERO REAL: 15, NÚMERO IMAGINÁRIO: -20
*/

function CriaNumeroComplexo(): NumeroComplexo {
    let valorReal = rl3.questionInt("Defina o valor REAL: ")
    let valorImaginario = rl3.questionInt("DEfina o valor Imaginario: ")
    return new NumeroComplexo(valorReal, valorImaginario);
}

let complexo1 = new NumeroComplexo(0, 0);
let main: boolean = true
while (main) {
    console.log(`\n MENU
    0- Definir o Numero Complexo 
    1- Definir o Numero REAL
    2- Definir o Numeor IMAGINARIO
    3- Somar Numero Complexo
    4- Subtrair Numero Complexo 
    5- Multiplicar Numero Complexo 
    6- Dividir Numero Complexo
    7- Compara Numero Complexo 
    8- Vizualizar Numero Complexo 
    9- Modulo Numero Complexo  
    10- Sair`);

    let escolha = rl3.questionInt("Escolha uma opecao: ")
    switch (escolha) {
        case 0:
            const real = rl3.questionInt("Defina o valor REAL: ");
            const imaginario = rl3.questionInt("Defina o valor IMAGINÁRIO: ");
            complexo1 = new NumeroComplexo(real, imaginario);
            break;

        case 1:
            const novoReal = rl3.questionInt("Digite o valor do número REAL: ");
            complexo1.setReal(novoReal);
            break;

        case 2:
            const novoImaginario = rl3.questionInt("Digite o valor IMAGINÁRIO: ");
            complexo1.setImaginario(novoImaginario);
            break;

        case 3:
            const realSoma = rl3.questionInt("Digite o valor REAL do número para somar: ");
            const imaginarioSoma = rl3.questionInt("Digite o valor IMAGINÁRIO do número para somar: ");
            const soma = complexo1.somar(new NumeroComplexo(realSoma, imaginarioSoma));
            console.log(`Resultado da soma: ${soma.visualizar()}`);
            break;

        case 4:
            const realSubtracao = rl3.questionInt("Digite o valor REAL do número para subtrair: ");
            const imaginarioSubtracao = rl3.questionInt("Digite o valor IMAGINÁRIO do número para subtrair: ");
            const subtracao = complexo1.subtrair(new NumeroComplexo(realSubtracao, imaginarioSubtracao));
            console.log(`Resultado da subtração: ${subtracao.visualizar()}`);
            break;

        case 5:
            const realMultiplicacao = rl3.questionInt("Digite o valor REAL do número para multiplicar: ");
            const imaginarioMultiplicacao = rl3.questionInt("Digite o valor IMAGINÁRIO do número para multiplicar: ");
            const multiplicacao = complexo1.multiplicar(new NumeroComplexo(realMultiplicacao, imaginarioMultiplicacao));
            console.log(`Resultado da multiplicação: ${multiplicacao.visualizar()}`);
            break;

        case 6:
            const realDivisao = rl3.questionInt("Digite o valor REAL do número para dividir: ");
            const imaginarioDivisao = rl3.questionInt("Digite o valor IMAGINÁRIO do número para dividir: ");
            const divisao = complexo1.dividir(new NumeroComplexo(realDivisao, imaginarioDivisao));
            console.log(`Resultado da divisão: ${divisao.visualizar()}`);
            break;

        case 7:
            const realComparacao = rl3.questionInt("Digite o valor REAL do número para comparar: ");
            const imaginarioComparacao = rl3.questionInt("Digite o valor IMAGINÁRIO do número para comparar: ");
            const comparacao = complexo1.comparar(new NumeroComplexo(realComparacao, imaginarioComparacao));
            console.log(`Os números são ${comparacao}? 'iguais' : 'diferentes'}`);
            break;

        case 8:
            console.log(`Número complexo atual: ${complexo1.visualizar()}`);
            break;

        case 9:
            console.log(`Módulo do número complexo: ${complexo1.modulo()}`);
            break;

        case 10:
            console.log("Saindo...");
            const mainMenu = false;
            break;

        default:
            console.log("Opção inválida.");
            break;
    }
}
 main()
