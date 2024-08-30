export interface Ijogo {
    getDetalhees(): void;
    setDetalhes(): void;
}


export interface IjogoEletronico {
    getDetalhees(): void;
    setDetalhes(): void;
}


export interface IjogoDeTabuleiro {
    getDetalhees(): void;
    setDetalhes(): void;
}


export interface IBibliotecaDeJogos {
    adicionarJogo(jogo: any): void;
    removerJogo(titulo: any): void;
    listarJogos(Jogo: any): void;
}