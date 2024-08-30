import { Jogo } from "./Jogo";
export class BibliotecaDeJogos {
    private jogos: Jogo[];

    constructor() {
        this.jogos = []; 
    }

    public adicionarJogo(jogo: Jogo): void {
        try {
            this.jogos.push(jogo);
        } catch (error) {
            console.log(` adicionarJogo ERRO:${error}`)
        }
    }

    public removerJogo(title: string): void {
        try {
            for (let i = 0; i < this.jogos.length; i++) {
                if(this.jogos[i].getTitle() === title) {
                    this.jogos.splice(i, 1); 
                    break; 
                }
            }
            
        } catch (error) {
            console.log(` removerJogo ERRO:${error}`)
        }
        
     
    }
    
    public listarJogos(): string {
        let todosJogos: string = '';
        
        try {
            for (let i = 0; i < this.jogos.length; i++) {
                todosJogos += `${this.jogos[i].getDetalhes()}\n`; 
            } 
        } catch (error) {
            console.log(` listarJogo ERRO:${error}`)
        }
        return todosJogos;
    
    }
}