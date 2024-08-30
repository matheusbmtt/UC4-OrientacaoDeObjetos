import { leitor, main, Jogo, JogoDeTabuleiro, JogoEletronico, BibliotecaDeJogos } from "../../jogos";

let jogo = new Jogo("GTA 5", "Ação", 18);
let jogoTabu = new JogoDeTabuleiro("Monopoly", "Tabuleiro", 8,);
jogoTabu.numeroDeJogadores = 4
let jogoEletro = new JogoEletronico("FIFA 14", "Esporte", 10);
jogoEletro.plataforma = "PlayStation 5 "
let biblioteca = new BibliotecaDeJogos();

let opcao = '';

while (opcao !== '10') {
    console.log("\n===== SISTEMA DE JOGOS =====");
    console.log("1. Ver Detalhes do Jogo");
    console.log("2. Adicionar Novo Jogo");
    console.log("3. Ver Detalhes do Jogo Eletrônico");
    console.log("4. Adicionar Novo Jogo Eletrônico");
    console.log("5. Ver Detalhes do Jogo de Tabuleiro");
    console.log("6. Adicionar Novo Jogo de Tabuleiro");
    console.log("7. Listar Jogos da Biblioteca");
    console.log("8. Adicionar Jogo à Biblioteca");
    console.log("9. Remover Jogo da Biblioteca");
    console.log("10. SAIR\n");

    opcao = leitor.question("ESCOLHA UMA OPCAO: ");

    switch (opcao) {
        case '1':
            jogo.getDetalhees();
            break;
        case '2':
            jogo.setDetalhes();
            break;
        case '3':
            jogoEletro.getDetalhees();
            break;
        case '4':
            jogoEletro.setDetalhes();
            break;
        case '5':
            jogoTabu.getDetalhes();
            break;
        case '6':
            jogoTabu.setDetalhes();
            break;
        case '7':
            biblioteca.listarJogos();
            break;
        case '8':
            biblioteca.adicionarJogo(jogo);
            break;
        case '9':
            biblioteca.removerJogo();
            break;
        case '10':
            console.log("SAINDO...");
            break;
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
    }
}
main()