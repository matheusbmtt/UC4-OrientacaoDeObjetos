import { Icliente, IContaBancaria } from "./interfaces";
let rl = require("readline-sync");

// Classe base para contas bancárias
abstract class ContaBancaria implements Icliente {
    Id: number;               // ID da conta
    Nome: string;            // Nome do cliente
    Email: string;           // Email do cliente
    Senha: number;           // Senha da conta
    Saldo: number;           // Saldo atual da conta
    Historico: string[];     // Histórico de transações

    constructor(
        Id: number,
        Nome: string,
        Email: string,
        Senha: number,
        Saldo: number
    ) {
        this.Id = Id;
        this.Nome = Nome;
        this.Email = Email;
        this.Senha = Senha;
        this.Saldo = Saldo;
        this.Historico = [];
    }

    // Métodos abstratos que devem ser implementados pelas subclasses
    abstract Depositar(valor: number): void;
    abstract Sacar(valor: number): void;
    abstract Transferir(valor: number, contaDestino: ContaBancaria): void;

    // Método para gerar e exibir o extrato bancário
    GerarExtrato(): void {
        console.log("===== EXTRATO BANCÁRIO DETALHADO =====");
        console.log(`Conta: ${this.Nome} (ID: ${this.Id})`);
        console.log(`Saldo Inicial: R$${this.Saldo.toFixed(2)}`);
        console.log("------------------------------------------------------");

        // Imprime o histórico de transações
        this.Historico.forEach((transacao, index) => {
            console.log(`${index + 1}. ${transacao}`);
        });

        console.log("------------------------------------------------------");
        console.log(`Saldo Final: R$${this.Saldo.toFixed(2)}`);
    }

    // Método para retornar o saldo atual da conta
    SaldoAtual(): number {
        return this.Saldo;
    }
}

// Classe para Conta Corrente
class ContaCorrente extends ContaBancaria {
    // Implementação do método Depositar para Conta Corrente
    Depositar(valor: number): void {
        if (valor <= 0) throw new Error("O valor do depósito deve ser positivo.");
        this.Saldo += valor;
        this.Historico.push(`Depósito: R$${valor.toFixed(2)} - Saldo: R$${this.Saldo.toFixed(2)}`);
        console.log(`Depósito de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.Saldo.toFixed(2)}`);
    }

    // Implementação do método Sacar para Conta Corrente
    Sacar(valor: number): void {
        if (valor <= 0) throw new Error("O valor do saque deve ser positivo.");
        if (valor > this.Saldo) throw new Error("Saldo insuficiente.");
        this.Saldo -= valor;
        this.Historico.push(`Saque: R$${valor.toFixed(2)} - Saldo: R$${this.Saldo.toFixed(2)}`);
        console.log(`Saque de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.Saldo.toFixed(2)}`);
    }

    // Implementação do método Transferir para Conta Corrente
    Transferir(valor: number, contaDestino: ContaBancaria): void {
        if (valor <= 0) throw new Error("O valor da transferência deve ser positivo.");
        if (valor > this.Saldo) throw new Error("Saldo insuficiente para transferência.");
        this.Sacar(valor);
        contaDestino.Depositar(valor);
        this.Historico.push(`Transferência para ${contaDestino.Nome}: R$${valor.toFixed(2)} - Saldo: R$${this.Saldo.toFixed(2)}`);
        console.log(`Transferência de R$${valor.toFixed(2)} realizada para ${contaDestino.Nome}.`);
    }
}

// Classe para Conta Poupança
class ContaPoupanca extends ContaBancaria {
    // Método para aplicar juros na Conta Poupança
    AplicarJuros(taxa: number): void {
        if (taxa <= 0) throw new Error("A taxa de juros deve ser positiva.");
        const juros = this.Saldo * (taxa / 100);
        this.Saldo += juros;
        this.Historico.push(`Juros aplicados: R$${juros.toFixed(2)} - Saldo: R$${this.Saldo.toFixed(2)}`);
        console.log(`Juros de R$${juros.toFixed(2)} aplicados. Novo saldo: R$${this.Saldo.toFixed(2)}`);
    }

    // Implementação do método Depositar para Conta Poupança
    Depositar(valor: number): void {
        if (valor <= 0) throw new Error("O valor do depósito deve ser positivo.");
        this.Saldo += valor;
        this.Historico.push(`Depósito: R$${valor.toFixed(2)} - Saldo: R$${this.Saldo.toFixed(2)}`);
        console.log(`Depósito de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.Saldo.toFixed(2)}`);
    }

    // Implementação do método Sacar para Conta Poupança
    Sacar(valor: number): void {
        if (valor <= 0) throw new Error("O valor do saque deve ser positivo.");
        if (valor > this.Saldo) throw new Error("Saldo insuficiente.");
        this.Saldo -= valor;
        this.Historico.push(`Saque: R$${valor.toFixed(2)} - Saldo: R$${this.Saldo.toFixed(2)}`);
        console.log(`Saque de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.Saldo.toFixed(2)}`);
    }

    // Implementação do método Transferir para Conta Poupança
    Transferir(valor: number, contaDestino: ContaBancaria): void {
        if (valor <= 0) throw new Error("O valor da transferência deve ser positivo.");
        if (valor > this.Saldo) throw new Error("Saldo insuficiente para transferência.");
        this.Sacar(valor);
        contaDestino.Depositar(valor);
        this.Historico.push(`Transferência para ${contaDestino.Nome}: R$${valor.toFixed(2)} - Saldo: R$${this.Saldo.toFixed(2)}`);
        console.log(`Transferência de R$${valor.toFixed(2)} realizada para ${contaDestino.Nome}.`);
    }
}

// Função para criar uma nova conta
function criarConta(tipo: string): ContaBancaria {
    // Coleta de informações do usuário para criação da conta
    let id = rl.questionInt("Insira o ID do usuário: ");
    let nome = rl.question("Insira o nome do usuário: ");
    let email = rl.question("Insira o email do usuário: ");
    let senha = rl.questionInt("Insira a senha do usuário: ");
    let saldo = rl.questionInt("Insira o saldo inicial do usuário: ");

    // Criação da conta com base no tipo especificado
    if (tipo === "corrente") {
        let conta = new ContaCorrente(id, nome, email, senha, saldo);
        console.log(`Conta Corrente criada para ${nome} com saldo de R$${saldo}.`);
        return conta;
    } else if (tipo === "poupanca") {
        let conta = new ContaPoupanca(id, nome, email, senha, saldo);
        console.log(`Conta Poupança criada para ${nome} com saldo de R$${saldo}.`);
        return conta;
    } else {
        throw new Error("Tipo de conta inválido.");
    }
}

// Função para entrar na conta
function EntrarNaConta(): ContaBancaria | null {
    if (contas.length === 0) {
        console.log("Nenhuma conta cadastrada.");
        return null;
    }

    // Coleta de ID e senha para autenticação
    let id = rl.questionInt("Insira o ID da conta: ");
    let senha = rl.questionInt("Insira a senha da conta: ");

    // Verifica se o ID e a senha correspondem a uma conta existente
    for (let conta of contas) {
        if (conta.Id === id && conta.Senha === senha) {
            console.log(`Bem-vindo(a), ${conta.Nome}!`);
            return conta;
        }
    }

    console.log("ID ou senha incorretos.");
    return null;
}

// Lista de contas
let contas: ContaBancaria[] = [];

// Menu interativo
let menu: boolean = true;
let user: ContaBancaria | null = null;

while (menu) {
    try {
        // Exibe o menu e captura a opção escolhida pelo usuário
        let opcao = rl.questionInt(
            "\nInsira o número da opção desejada:\n 1 - Entrar na Conta\n 2 - Criar Conta Corrente\n 3 - Criar Conta Poupança\n 4 - Depositar\n 5 - Sacar\n 6 - Transferir\n 7 - Aplicar Juros\n 8 - Extrato\n 9 - Sair\n"
        );

        switch (opcao) {
            case 1: // Entrar na Conta
                user = EntrarNaConta();
                break;
            case 2: // Criar Conta Corrente
                user = criarConta("corrente");
                contas.push(user);
                break;
            case 3: // Criar Conta Poupança
                user = criarConta("poupanca");
                contas.push(user);
                break;
            case 4: // Depositar
                if (user) {
                    let valorDeposito = rl.questionInt("Insira o valor do depósito: ");
                    user.Depositar(valorDeposito);
                } else {
                    console.log("Você deve estar logado em uma conta para realizar um depósito.");
                }
                break;
            case 5: // Sacar
                if (user) {
                    let valorSaque = rl.questionInt("Insira o valor do saque: ");
                    user.Sacar(valorSaque);
                } else {
                    console.log("Você deve estar logado em uma conta para realizar um saque.");
                }
                break;
            case 6: // Transferir
                if (user) {
                    let valorTransferencia = rl.questionInt("Insira o valor da transferência: ");
                    let idDestino = rl.questionInt("Insira o ID da conta destino: ");
                    let contaDestino = contas.find(conta => conta.Id === idDestino);
                    if (contaDestino) {
                        user.Transferir(valorTransferencia, contaDestino);
                    } else {
                        console.log("Conta destino não encontrada.");
                    }
                } else {
                    console.log("Você deve estar logado em uma conta para realizar uma transferência.");
                }
                break;
            case 7: // Aplicar Juros
                if (user instanceof ContaPoupanca) {
                    let taxaJuros = rl.questionFloat("Insira a taxa de juros: ");
                    user.AplicarJuros(taxaJuros);
                } else {
                    console.log("Essa opção está disponível apenas para contas poupança.");
                }
                break;
            case 8: // Extrato
                if (user) {
                    user.GerarExtrato();
                } else {
                    console.log("Você deve estar logado em uma conta para visualizar o extrato.");
                }
                break;
            case 9: // Sair
                menu = false;
                console.log("Saindo do sistema...");
                break;
            default:
                console.log("Opção inválida.");
        }
    } catch (error) {
        console.log(`Erro: ${error.message}`);
    }
}