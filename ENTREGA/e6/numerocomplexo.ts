import * as readlineSync from 'readline-sync';

// Classe que representa um número complexo.
export class NumeroComplexo {
    private Real: number;
    private Imaginario: number;

    constructor(Real: number, Imaginario: number) {
        this.Real = Real;
        this.Imaginario = Imaginario;
    }

    // Retorna o valor da parte real.
    public getReal(): number {
        return this.Real;
    }

    // Novo valor para a parte real
    public setReal(Real: number): void {
        this.Real = Real;
    }

    // Retorna o valor da parte imaginária.
    public getImaginario(): number {
        return this.Imaginario;
    }

    // Novo valor para a parte imaginária.
    public setImaginario(Imaginario: number): void {
        this.Imaginario = Imaginario;
    }

    // Soma dois números complexos.
    public somar(outroComplexo: NumeroComplexo): NumeroComplexo {
        let real = this.Real + outroComplexo.getReal();
        let imaginario = this.Imaginario + outroComplexo.getImaginario();
        return new NumeroComplexo(real, imaginario);
    }

    // Subtrai um número complexo de outro.
    public subtrair(outroComplexo: NumeroComplexo): NumeroComplexo {
        let real = this.Real - outroComplexo.getReal();
        let imaginario = this.Imaginario - outroComplexo.getImaginario();
        return new NumeroComplexo(real, imaginario);
    }

    // Multiplica dois números complexos.
    public multiplicar(outroComplexo: NumeroComplexo): NumeroComplexo {
        let real =
            this.Real * outroComplexo.getReal() -
            this.Imaginario * outroComplexo.getImaginario();
        let imaginario =
            this.Real * outroComplexo.getImaginario() +
            this.Imaginario * outroComplexo.getReal();
        return new NumeroComplexo(real, imaginario);
    }

    // Divide um número complexo por outro.
    public dividir(outroComplexo: NumeroComplexo): NumeroComplexo {
        let partePotenciacao =
            outroComplexo.getReal() * outroComplexo.getReal() +
            outroComplexo.getImaginario() * outroComplexo.getImaginario();

        // Calcula a parte real do resultado
        let real =
            (this.Real * outroComplexo.getReal() +
                this.Imaginario * outroComplexo.getImaginario()) /
            partePotenciacao;

        // Calcula a parte imaginária do resultado
        let imaginario =
            (this.Imaginario * outroComplexo.getReal() -
                this.Real * outroComplexo.getImaginario()) /
            partePotenciacao;
        return new NumeroComplexo(real, imaginario);
    }

    // Calcula o módulo (ou magnitude) do número complexo.
    public modulo(): number {
        return Math.sqrt(this.Real ** 2 + this.Imaginario ** 2);
    }

    // Verifica se dois números complexos são iguais.
    public equals(outroComplexo: NumeroComplexo): boolean {
        return (
            this.Imaginario === outroComplexo.getImaginario() &&
            this.Real === outroComplexo.getReal()
        );
    }

    // Retorna o número complexo em formato string.
    public toString(): string {
        return `REAL: ${this.Real} + IMAGINÁRIO: ${this.Imaginario}i`;
    }
}

// Função principal que exibe o menu e processa as opções do usuário
function menu() {
    console.log(
        "Escolha uma opção:\n 1. Criar um número complexo\n 2. Somar dois números complexos\n 3. Subtrair dois números complexos\n 4. Multiplicar dois números complexos\n 5. Dividir dois números complexos\n 6. Calcular o módulo de um número complexo\n 7. Verificar a igualdade de dois números complexos\n 8. Sair"
    );

    const opcao = readlineSync.questionInt("Digite o número da opção desejada: ");

    switch (opcao) {
        case 1:
            criarNumeroComplexo();
            break;
        case 2:
            operarNumerosComplexos("somar");
            break;
        case 3:
            operarNumerosComplexos("subtrair");
            break;
        case 4:
            operarNumerosComplexos("multiplicar");
            break;
        case 5:
            operarNumerosComplexos("dividir");
            break;
        case 6:
            calcularModulo();
            break;
        case 7:
            verificarIgualdade();
            break;
        case 8:
            console.log("Saindo...");
            return;
        default:
            console.log("Opção inválida!");
    }

    // Volta ao menu principal
    menu();
}

// Função para criar e armazenar um número complexo.
function criarNumeroComplexo() {
    const real = readlineSync.questionFloat("Digite a parte real: ");
    const imaginario = readlineSync.questionFloat("Digite a parte imaginária: ");
    const numero = new NumeroComplexo(real, imaginario);
    console.log("Número complexo criado:", numero.toString());
}

// Função para operar com dois números complexos.
function operarNumerosComplexos(operacao: string) {
    console.log("Criação do primeiro número complexo:");
    const real1 = readlineSync.questionFloat("Digite a parte real do primeiro número: ");
    const imaginario1 = readlineSync.questionFloat("Digite a parte imaginária do primeiro número: ");
    const numero1 = new NumeroComplexo(real1, imaginario1);

    console.log("Criação do segundo número complexo:");
    const real2 = readlineSync.questionFloat("Digite a parte real do segundo número: ");
    const imaginario2 = readlineSync.questionFloat("Digite a parte imaginária do segundo número: ");
    const numero2 = new NumeroComplexo(real2, imaginario2);

    let resultado: NumeroComplexo;

    switch (operacao) {
        case "somar":
            resultado = numero1.somar(numero2);
            break;
        case "subtrair":
            resultado = numero1.subtrair(numero2);
            break;
        case "multiplicar":
            resultado = numero1.multiplicar(numero2);
            break;
        case "dividir":
            resultado = numero1.dividir(numero2);
            break;
        default:
            console.log("Operação inválida!");
            return;
    }

    console.log(`Resultado da operação (${operacao}):`, resultado.toString());
}

// Função para calcular o módulo de um número complexo.
function calcularModulo() {
    const real = readlineSync.questionFloat("Digite a parte real do número complexo: ");
    const imaginario = readlineSync.questionFloat("Digite a parte imaginária do número complexo: ");
    const numero = new NumeroComplexo(real, imaginario);
    console.log("Módulo do número complexo:", numero.modulo());
}

// Função para verificar a igualdade de dois números complexos.
function verificarIgualdade() {
    console.log("Criação do primeiro número complexo:");
    const real1 = readlineSync.questionFloat("Digite a parte real do primeiro número: ");
    const imaginario1 = readlineSync.questionFloat("Digite a parte imaginária do primeiro número: ");
    const numero1 = new NumeroComplexo(real1, imaginario1);

    console.log("Criação do segundo número complexo:");
    const real2 = readlineSync.questionFloat("Digite a parte real do segundo número: ");
    const imaginario2 = readlineSync.questionFloat("Digite a parte imaginária do segundo número: ");
    const numero2 = new NumeroComplexo(real2, imaginario2);

    const saoIguais = numero1.equals(numero2);
    console.log(`Os números complexos são iguais? ${saoIguais}`);
}

// Inicia o menu
menu();

