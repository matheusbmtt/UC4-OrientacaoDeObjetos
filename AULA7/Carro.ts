let leitor = require('readline-sync')

// a interface é o modelo a seguir com a classe
export interface CarroInterface {
    tanque: number
    km: number
    marca: string

    getCarro(): void
    setCarro(): void
    andar(): void
    obterGasolina(): number
    addGasolina(): void
}

export class Carro implements CarroInterface {
    public tanque: number
    public km: number
    public marca: string

    constructor(tanqueCarro: number, kmCarro: number, marcaCarro: string) {
        this.tanque = tanqueCarro
        this.km = kmCarro
        this.marca = marcaCarro
    }

    //visualiza todas as infos do carro:
    public getCarro(): void {
        console.log(`Marca do Carro: ${this.marca}, Km/L: ${this.km}, Tanque de Gasolina: ${this.tanque} L`)
    }

    //aqui atualiza as infos do carro:
    public setCarro(): void {
        let marcaCarro = leitor.question("Insira a marca do carro: ").toUpperCase()
        let kmCarro = leitor.question("Insira a km/L: ")
        let tanqueCarro = leitor.questionInt("Insira a quantidade de gasolina que tem no tanque: ")

        if(marcaCarro == ""){
            this.marca = this.marca
        } else {
            this.tanque = tanqueCarro
        }

        if(kmCarro == null){
            this.km = this.km
        } else {
            this.km = kmCarro
        }

        if(tanqueCarro == null){
            this.tanque = this.tanque
        } else {
            this.marca = marcaCarro
        }

    }

    //no método andar é feito o cálculo para verificar a quantidade de gasolina gasta no percurso do carro
    public andar(): void {
        let distancia = leitor.questionInt("Insira a distância a ser percorrida pelo veículo (em kms): ")
        //tanque - (distancia / km/l)
        let combustivelGasto = (distancia / this.km)

        if (combustivelGasto > this.tanque) {
            console.log(`A viagem não foi realizada, você só tem ${this.tanque} L no carro`);
        } else {
            //this.tanque = this.tanque - combustivelGasto
            this.tanque -= combustivelGasto
            console.log(`Você viajou e está com ${this.tanque}L de gasolina no tanque`)
        }
    }

    public obterGasolina(): number {
        return this.tanque
    }

    public addGasolina(): void {
        let frentista = leitor.questionInt("Quanto vai abastecer hoje, chefia? ")
        this.tanque += frentista
        console.log(`Você está com ${this.obterGasolina()}L`)
    }
}
