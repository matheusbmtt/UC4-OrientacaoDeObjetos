export let rl = require("readline-sync")

export interface Contador{
    valorContador: number;
    zerar(): void;
    incrementar(): void;
    valor(): number;
}

export class Contador implements Contador{
    public valorContador: number;

    constructor(valorContador: number){
        this.valorContador = valorContador
    }

    //Começo o contador zerando ele
    zerar(): void {
        this.valorContador = 0;
    }

    // Incrimento em um em um
    public incrementar(): void {
        this.valorContador += 1;
        // OU this.valorContador = this.valorContador + this.valorContador 
    }
    //Retorna o Valor atual do Contador
    public valor(): number {
        return this.valorContador
    }
}


function criarContador(): Contador {
    let valorCriado = rl.questionInt("Defina o valor inicial do contador: ");
    return new Contador(valorCriado);
}

let contador1 = criarContador();

let menu: boolean = true;
while (menu) {
    let opcao = rl.questionInt('Insira o numero da opcao desejada:\n1 - Definir Valor Inicial\n2 - Visualizar Contador\n3 - Incrementar Contador\n4 - Zerar Contador\n5 - Sair\n');

    switch(opcao) {
        case 1:
            contador1 = criarContador();
            break;
        case 2:
            console.log("Valor do Contador:", contador1.valor());
            break;
        case 3:
            contador1.incrementar();
            break;
        case 4:
            contador1.zerar();
            break;
        case 5:
            menu = false;
            break;
        default:
            console.log("Oppco invalida. Tente novamente.");
            break;
    }
}

console.log("Programa encerrado.");
