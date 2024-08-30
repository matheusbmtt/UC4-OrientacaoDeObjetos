let rl2 = require("readline-sync")
export class Ponto2D {
    private x: number; // Coordenada X do ponto
    private y: number; // Coordenada Y do ponto

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    // Retorna o valor inicial da coordenada X
    public getX(): number {
        return this.x;
    }

    // Define o valor da coordenada X
    public setX(x: number): void {
        this.x = x;
    }

    // Retorna o valor inicial da coordenada Y
    public getY(): number {
        return this.y;
    }

    // Define o valor da coordenada Y
    public setY(y: number): void {
        this.y = y;
    }

    // Define X e Y 
    public setCoordenada(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    // Novas coordenadas X e Y 
    public setNewPoint(outroPonto: Ponto2D): void {
        this.x = outroPonto.getX();
        this.y = outroPonto.getY();
    }

    // Compara se os pontos são iguais 
    public equals(outroPonto: Ponto2D): boolean {
        if (outroPonto.getX() === this.x && outroPonto.getY() === this.y) {
            return true
        } else {
            return false
        }
    }

    // Retorna o valor das coordenadas em string 
    public toString(): string {
        return `x: ${this.x}, y: ${this.y}`;
    }

    // Calcula a distância entre este ponto e outro ponto
    public distancia(outroPonto: Ponto2D): number {
        const dx = outroPonto.getX() - this.x;
        // Valor do xRetorna - xDefinido
        // Valor inicial  0  - Novo valor que foi definido
        const dy = outroPonto.getY() - this.y;
        const d = dx + dy
        return d; // Distância
    }

    // Cria uma cópia deste ponto
    public clone(): Ponto2D {
        let clone = new Ponto2D(this.x, this.y); // Copia o método coordenadas
        return clone
    }

}
//Aqui a gente define as coordenadas que queremos no plano cartesiano
export class PontoXY extends Ponto2D {
    constructor(x: number, y: number) {
        super(x, y);
        this.setCoordenada(x, y); // Define as coordenadas X e Y do ponto
    }
}
//Aqui a gente define as coordenadas com base com o valor do X e Y que foram definidos na class PontoXY
export class PontoEx extends Ponto2D {
    constructor(outroPonto: Ponto2D) {
        super(); // Chama o construtor da classe base
        this.setCoordenada(outroPonto.getX(), outroPonto.getY());
        // Define as coordenadas do ponto com base em outro ponto
    }
}

/*
const ponto1 = new PontoXY(20, 35); // Um ponto com coordenadas (20, 35)
const ponto2 = new PontoEx(ponto1); // Um ponto com as mesmas coordenadas que ponto1

// Exibindo coordenadas
console.log(ponto1.toString()); //  x: 20, y: 35
console.log(ponto2.toString()); //  x: 20, y: 35

// Definindo novas coordenadas para ponto1
ponto1.setCoordenada(2, 5);
console.log(ponto1.toString()); //  x: 2, y: 5

// Verifica se são iguais 
console.log(ponto1.equals(ponto2)); //  false (porque ponto1 foi alterado)

// Calcula distância entre ponto1 e ponto2
const distancia = ponto1.distancia(ponto2);
console.log(`Distância: ${distancia}`); // Mostra a Distância entre os pontos

// Clonando ponto1
const pontoClone = ponto1.clone();
console.log(pontoClone); //  x: 2, y: 4
*/

// Função para criar um objeto Ponto2D
function CriaXY(): Ponto2D {
    let valorX = rl2.questionInt("Defina o Valor do X: ");
    let valorY = rl2.questionInt("Defina o Valor do Y: ");
    return new Ponto2D(valorX, valorY);
}
let ponto1 = new Ponto2D(0, 0)
let menu: boolean = true
while (menu) {
    console.log(`\n MENU: 
    0- Definir Ponto2D Inicial
    1- Definir Valor Inicial do X
    2- Definir Valor Inicial do Y
    3- Definir Coordenada
    4- Comparar Coordenadas
    5- Valor das Coordenadas em String
    6- Calcular Distancia 
    7- Vizualizar X
    8- Vizalizar Y
    9- Vizualizar Coordenada
    10- Sair `);


    let escolha = rl2.questionInt("Escolha Uma Opecao: ")
    switch (escolha) {
        case 0:
            ponto1 = CriaXY()
            break
        case 1: {
            let x = rl2.questionInt("Digite o valor para X: ");
            ponto1.setCoordenada(x, ponto1.getY());
            break;
        }
        case 2: {
            let y = rl2.questionInt("Digite o valor para Y: ");
            ponto1.setCoordenada(ponto1.getX(), y);
            break;
        }
        case 3: {
            let x = rl2.questionInt("Digite o valor para X: ");
            let y = rl2.questionInt("Digite o valor para Y: ");
            ponto1.setCoordenada(x, y);
            break;
        }
        case 4: {
            // Comparar Coordenadas (Você pode adicionar mais lógica aqui se necessário)
            console.log(`Comparar Coordenadas não implementado.`);
            break;
        }
        case 5: {
            console.log(`Coordenadas em String: (${ponto1.getX()}, ${ponto1.getY()})`);
            break;
        }
        case 6: {
            // Calcular Distância (Exemplo simples de distância com outro ponto)
            let outroX = rl2.questionInt("Digite o valor para X do outro ponto: ");
            let outroY = rl2.questionInt("Digite o valor para Y do outro ponto: ");
            let ponto2 = new PontoXY(outroX, outroY);
            // calcula a raiz quadrada de um número (Math.sqrt), usada para elevar um número a uma determinada potência(Math.pow)
            let distancia = Math.sqrt(Math.pow(ponto1.getX() - ponto2.getX(), 2) + Math.pow(ponto1.getY() - ponto2.getY(), 2));
            console.log(`Distância: ${distancia}`);
            break;
        }
        case 7: {
            console.log(`X = ${ponto1.getX()}`);
            break;
        }
        case 8: {
            console.log(`Y = ${ponto1.getY()}`);
            break;
        }
        case 9: {
            console.log(`Coordenada: (${ponto1.getX()}, ${ponto1.getY()})`);
            break;
        }
        case 10: {
            console.log("Saindo...");
            menu = false;
            break;
        }
        default: {
            console.log("Opção inválida.");
            break;
        }
    }
}
