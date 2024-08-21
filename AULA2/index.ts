var leitor = require('readline-sync')

class Carro{
    motor: number
    rodas: number
    marca: string
    cor: string
    kmmax: number

    constructor(motor: number, rodas: number, marca: string, cor: string, kmmax: number){
        this.motor = motor
        this.rodas = rodas
        this.marca = marca
        this.cor = cor
        this.kmmax = kmmax
    }

    dirigir(){
        console.log(`Estou dirigindo meu ${this.marca}`);
    }

    acelerar(){
        console.log(`O seu ${this.marca} chegou a ${this.kmmax} km/h`);
    }

    lavar(){
        console.log(`Estou lavando meu ${this.marca}`);
    }
}

class Mitsubishi extends Carro{
    dirigir(): void {
        console.log();
    }
}


/*
motor: number
rodas: number
marca: string
cor: string
kmmax: number  

NUMBER e STRING -> Tipagens Genéricas
INT e FLOAT -> Tipagem Numérica Primitiva
STRING, CHAR, VARCHAR -> Tipagens Primitivas de Texto
*/

var motorNovo = leitor.questionFloat("Qual o tipo do seu motor? ")
var rodasNovo = leitor.questionInt("Qual o aro da roda do carro? ")
var marcaNovo = leitor.question("Qual a marca do carro? ")
var corNovo = leitor.question("Qual a cor do carro? ")
var kmsNovo = leitor.questionInt("Qual a kilometragem máxima? ")

var carroNovo = new Carro(motorNovo, rodasNovo, marcaNovo, corNovo, kmsNovo)

console.log(carroNovo);
