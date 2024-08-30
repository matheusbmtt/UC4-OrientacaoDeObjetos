import { leitor, IjogoEletronico, Ijogo, IjogoDeTabuleiro } from "../../jogos";

export class Jogo implements Ijogo {
    protected titulo: string;
    protected genero: string;
    protected classificacaoEtaria: number

    constructor(titulo: string, genero: string, classificacaoEtaria: number) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
    }
    public getDetalhees(): void {
        console.log(`
        Titulo: ${this.titulo}
        Genero: ${this.genero}
        ClassificacaoEtaria: ${this.classificacaoEtaria}`);

    }

    public setDetalhes(): void {
        let tituloUp = leitor.question("Insira o Titulo: ")
        let generoUp = leitor.question("Insira o Gênero: ")
        let classificacaoEtariaUp = leitor.question("Insira a Classificacao Etaria: ")
        this.titulo = tituloUp;
        this.genero = generoUp;
        this.classificacaoEtaria = classificacaoEtariaUp;
    }
}


export class JogoEletronico extends Jogo implements IjogoEletronico {
    protected plataforma: string;
    constructor(titulo: string, genero: string, classificacaoEtaria: number, plataforma: string) {
        super(titulo, genero, classificacaoEtaria)
        this.plataforma = plataforma;

    }
    public getDetalhees(): void {
        console.log(`
        Titulo: ${this.titulo}
        Genero: ${this.genero}
        ClassificacaoEtaria: ${this.classificacaoEtaria}
        Plataforma: ${this.plataforma}`);
    }

    public setDetalhes(): void {
        let tituloUp = leitor.question("Insira o Titulo: ")
        let generoUp = leitor.question("Insira o Gênero: ")
        let classificacaoEtariaUp = leitor.question("Insira a Classificacao Etaria: ")
        let plataforma = leitor.question("Insira a Plataforma: ")
        this.titulo = tituloUp;
        this.genero = generoUp;
        this.classificacaoEtaria = classificacaoEtariaUp;
        this.plataforma = plataforma;
    }
}

export class JogoDeTabuleiro extends Jogo implements IjogoDeTabuleiro {
    protected jogo!: Jogo;
    protected jogoEletronico!: JogoEletronico;
    protected numeroDeJogadores!: number;

    super(titulo: string, genero: string, classificacaoEtaria: number, numeroDeJogadores: number) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
        this.numeroDeJogadores = numeroDeJogadores;
    }

    public getDetalhes(): void {
        console.log(`
        Titulo: ${this.titulo}
        Genero: ${this.genero}
        ClassificacaoEtaria: ${this.classificacaoEtaria}
        Número de Jogadores: ${this.numeroDeJogadores}`);
    }

    public setDetalhes(): void {
        let tituloUp = leitor.question("Insira o Titulo: ")
        let generoUp = leitor.question("Insira o Gênero: ")
        let classificacaoEtariaUp = leitor.question("Insira a Classificacao Etaria: ")
        let numeroDeJogadoresUp = leitor.questionInt("Insira o Numero de Jogadores: ")
        this.titulo = tituloUp;
        this.genero = generoUp;
        this.classificacaoEtaria = classificacaoEtariaUp;
        this.numeroDeJogadores = numeroDeJogadoresUp;
    }
}