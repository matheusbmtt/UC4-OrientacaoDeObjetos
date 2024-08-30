//lOja DE ELETRÔNICOS
let leitor = require("readline-sync");

// Interface para definir os métodos que devem estar presentes na classe Produto
interface IProduto {
    getProduto(): void;
    setProduto(): void;
    calcularLucro(): number;
    aplicarDesconto(): void;
}

// Classe Produto implementando a interface IProduto
class Produto implements IProduto {
    // Atributos da classe Produto
    nome: string;
    preco: number;
    marca: string;
    valorCompra: number;

    constructor(nome: string, preco: number, marca: string, valorCompra: number){
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
        this.valorCompra = valorCompra;
    }

    //Exibe os detalhes do produto no console.
    getProduto(): void {
        console.log(`
            Nome: ${this.nome}
            Preço: ${this.preco}
            Marca: ${this.marca}
            Valor de Atacado: ${this.valorCompra}
            `);
    }

    // Permite atualizar os dados do produto com entrada do usuário.
    setProduto(): void {
        let nomeUp = leitor.question("Insira o nome do produto: ");
        let precoUp = leitor.questionInt("Insira o preço: ");
        let marcaUp = leitor.question("Insira a marca: ");
        let valorCompraUp = leitor.questionInt("Insira o valor de compra do produto: ");
        this.nome = nomeUp;
        this.preco = precoUp;
        this.marca = marcaUp;
        this.valorCompra = valorCompraUp;
    }

    // Calcula o lucro obtido ao vender o produto.
    calcularLucro(): number {
        let lucro = this.preco - this.valorCompra;
        return lucro;
    }

    // Aplica um desconto ao preço do produto com base na entrada do usuário.
    aplicarDesconto(): void {
        let desconto = leitor.questionInt("Qual a porcentagem de desconto? ");
        let valorDescontado = (this.preco * (100 - desconto)) / 100;
        console.log(`Valor do produto com desconto: ${valorDescontado}`);
    }
}

// Interface para definir os métodos que devem estar presentes na classe Venda
interface IVenda {
    getVenda(): void;
    setVenda(): void;
    calcularTotal(): number;
}

// Classe Venda implementando a interface IVenda
class Venda implements IVenda {
    // Atributos da classe Venda
    produto: Produto;
    quantidade: number;
    valor_total: number;
    data: string;

    constructor(produto: Produto, quantidade: number, data: string){
        this.produto = produto;
        this.quantidade = quantidade;
        this.valor_total = quantidade * this.produto.preco;
        this.data = data;
    }

    //Exibe os detalhes da venda no console.
    getVenda(): void {
        console.log(`
            Nome do Produto: ${this.produto.nome}
            Quantidade: ${this.quantidade}
            Data: ${this.data}
            Valor Total: ${this.calcularTotal()}
            `);
    }

    // Permite atualizar os dados da venda com entrada do usuário.
    setVenda(): void {
        let produtoOuN = leitor.question("Você gostaria de modificar o produto? (s/n) ").toLowerCase();

        if(produtoOuN == "s"){
            this.produto.setProduto();
            let arrayInfos = modificarVenda();
            // Índice 0 = Valor da Quantidade
            // Índice 1 = Valor Data
            this.quantidade = arrayInfos[0];
            this.data = arrayInfos[1];
        } else {
            let arrayInfos = modificarVenda();
            this.quantidade = arrayInfos[0];
            this.data = arrayInfos[1];
        }

        // Função interna para modificar os detalhes da venda.
        function modificarVenda(): Array<any>{
            let quantidadeUp = leitor.questionInt("Qual a quantidade?: ");
            let dataUp = leitor.question("Qual a data da venda?: ");
            let arrayInfos = [quantidadeUp, dataUp];

            return arrayInfos;
        }
    }

    // Calcula o valor total da venda com base na quantidade e preço do produto.
    calcularTotal(): number {
        let total = this.quantidade * this.produto.preco;
        return total;
    }
}

// Função principal para execução do programa
function main(){
    let produto = new Produto("Teste", 3000, "Teste", 2000);
    let venda = new Venda(produto, 3, "01/07/2024");

    let opcao = '';

    // Loop principal para interação com o usuário
    while (opcao !== '8') {
        console.log("\n===== LOJA DE ELETRÔNICOS =====");
        console.log("1. Exibir dados do Produto ");
        console.log("2. Atualizar dados do Produto ");
        console.log("3. Calcular lucro do Produto ");
        console.log("4. Aplicar desconto ao Produto");
        console.log("5. Exibir dados da Venda");
        console.log("6. Atualizar dados da Venda");
        console.log("7. Calcular total da Venda");
        console.log("8. Sair\n");

        opcao = leitor.question("Escolha uma opção: ");

        // Switch case para executar diferentes funcionalidades
        switch (opcao) {
            case '1': 
                produto.getProduto();
                break;
            case '2':
                produto.setProduto();
                break;
            case '3':
                let lucro = produto.calcularLucro();
                console.log(`O lucro do Produto foi ${lucro}`);
                break;
            case '4':
                produto.aplicarDesconto();
                break;
            case '5':
                venda.getVenda();
                break;
            case '6':
                venda.setVenda();
                break;
            case '7':
                let totalVenda = venda.calcularTotal();
                console.log(`Total da Venda: ${totalVenda}`);
                break;
            case '8':
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida. Por favor, escolha uma opção válida.");
        }
    }
}

// Inicia a execução do programa chamando a função main
main();