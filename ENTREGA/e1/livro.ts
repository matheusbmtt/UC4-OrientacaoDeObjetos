var rl = require("readline-sync");

class livro {
    titulo: string
    autor: string
    anoPublicacao: Number
    constructor(titulo: string, autor: string, anoPublicacao: Number){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
    }
    obterDetalher(): void{
        console.log(`Nome do livro é ${this.titulo}, Escritor ${this.autor}, ano de lançamento ${this.anoPublicacao}`)
    }
}

function criarLivro(): livro {
    let tituloUp = rl.question("Insira o titulo: ")
    let autorUp = rl.question("Insira o autor: ")
    let anoPublicacao = rl.questionInt("Insira o ano da publicacao: ")
    return new livro(tituloUp,autorUp,anoPublicacao);
}

let livro1 = criarLivro();

let main: boolean = true;
while (main) {
    let opecao = rl.questionInt("Insira o numero da opecao desejada: \n 1 - Criar Livro \n 2 - Obter Datalhes ")
    
    switch (opecao) {
        case 1: 
            livro1;
            break;
        case 2:
            livro1.obterDetalher();
            break;
        case 3:
            main = false;
            break;
        default:
            console.log("Opecao invalida. Tente novamente.");
            break;
    }
}
