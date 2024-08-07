let leitor = require('readline-sync')
import { Carro } from "./Carro"

export interface GaragemInterface {
    carros: Carro[]
    getGaragem(): void
    setGaragem(carro: Carro): void
}

export class Garagem implements GaragemInterface {
    public carros: Carro[] = []

    public getGaragem(): void {
        for (let i = 0; i < this.carros.length; i++) {
            console.log(`${this.carros[i].marca}`)
        }
    }

    public setGaragem(carro: Carro): void {
        if (this.carros.length >= 10) {
            console.log(`Você não pode mais estacionar carros nessa garagem.`);
        } else {
            this.carros.push(carro)
            console.log(`Cadastro do ${carro.marca} concluido com sucesso`)
            console.log(`Você tem ${this.carros.length} carros na garagem.`);
        }
    }


    public modificarCarro(): void {
        for (let i = 0; i < this.carros.length; i++) {
            console.log(`${i} - ${this.carros[i].marca}`)
        }

        let numeroModificar = leitor.question("Escreva o número do carro que gostaria de modificar: ")
        console.log(`Iniciando a modificação do ${this.carros[numeroModificar].marca}`);

        let marcaModificar = leitor.question("Modelo: ").toUpperCase()
        let kmModificar = leitor.questionInt("KM/L: ")
        let tanqueModificar = leitor.questionInt("Tanque de Gasolina: ")

        this.carros[numeroModificar].marca = marcaModificar
        this.carros[numeroModificar].km = kmModificar
        this.carros[numeroModificar].tanque = tanqueModificar

        console.log(`O carro ficou: ${this.carros[numeroModificar].marca}`)
    }

    //esse método recebe o valor do modelo e deleta o carro escolhido
    public deletarCarro(): void {
        for (let i = 0; i < this.carros.length; i++) {
            console.log(`Carro ${i}: ${this.carros[i].marca}`)
        }

        let marcaDeletar = leitor.question("Escreva a marca do carro que gostaria de deletar: ")
        this.carros = this.carros.filter(carro => carro.marca !== marcaDeletar)

        console.log(`Após a modificação, esses são os carros na garagem:
                ${this.carros}`)
    }
}